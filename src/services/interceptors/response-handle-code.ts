/*
 * @Author: fyh
 * @Date: 2020-01-07 00:09:45
 * @Desc: 请求返回拦截
 */
import { Message } from "element-ui";
import storage from "@/utils/storage";
import router from "@/router/index";
const statusCode = {
  success: [200, 201, 202, 203, 204, 205, 206],
};

export default [
  (response) => {
    // 下载pdf文件
    if (response.headers["content-type"] === "application/pdf") {
      console.log("============下载pdf文件");
      const filename =
        decodeURI(response.headers["content-disposition"].split("=")[1]) ||
        "体检报告.pdf";
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = window.URL.createObjectURL(new Blob([response.data]));
      link.download = filename;
      document.body.appendChild(link);
      link.click();

      // 释放URL 对象
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
      return response.data;
    }
    // 下载excel文件
    if (response.headers["content-type"] === "application/octet-stream") {
      console.log("============下载excel文件");
      const filename =
        decodeURI(
          response.headers["content-disposition"].split(";")[1].split("=")[1]
        ) || "excel.xlsx";
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = window.URL.createObjectURL(new Blob([response.data]));
      link.download = filename;
      document.body.appendChild(link);
      link.click();

      // 释放URL 对象
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
      return response.data;
    }
    const responseType = response.request.responseType;
    if (responseType === "arraybuffer" && response.data) {
      const transferBase64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      return transferBase64;
    }

    const res = response.data;
    if (res) {
      // 未登录，请重新登录后操作
      let code = res.code;
      if (!res.code && res.status) {
        code = parseInt(res.status);
      }
      if (!statusCode.success.includes(code)) {
        const errMsg =
          res.message ||
          res.msg ||
          res.exception ||
          res.errMsg ||
          "服务器响应状态异常";
        Message.error(errMsg);
        return Promise.reject({ code, errMsg, response })
      }
      // if (code == "100001") {
      //   Message({
      //     type: "error",
      //     message: errMsg,
      //     onClose: () => {
      //       storage.loginOutClear();
      //       location.reload();
      //     },
      //   });
      // } else if (!statusCode.success.includes(code)) {
      //   Message.error(errMsg);
      // }
      return response;
    } else {
      Message.error("服务器响应状态异常");
      return Promise.reject({ code: response.code || response.status, errMsg: "服务器响应状态异常", response });
    }
  },
  (error) => {
    const { status, statusText } = error.response;
    if (status === 401) {
      Message({
        type: "error",
        message: "登录失效，请重新登录",
        onClose: () => {
          storage.loginOutClear();
          location.reload();
        },
      });
    } else {
      Message.error(`网络错误${status}：${statusText}`);
    }
    return error;
  },
];
