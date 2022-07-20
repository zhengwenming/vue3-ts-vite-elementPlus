/*
 * @Author: fyh
 * @Date: 2020-01-15 21:40:05
 * @Desc: 聊天共享模块
 */

import { request } from "@/services";
import { uploadImageCos, uploadFileCos } from "@/services/api/file";
import { form } from "@/services/convertors/content-type";
import storage from "@/utils/storage";

export default {
  state: {
    messageList: [],
    emojiList: [],
  },

  getters: {
    messageList(state: any) {
      return state.messageList;
    },
  },
  mutations: {
    setMessageList(store: any, value: any) {
      storage.setItem("messageList", value);
      store.messageList = value;
    },
  },
  actions: {
    // 上传图片
    uploadIMFile({ commit }, { ...params }) {
      return new Promise((resolve, reject) => {
        uploadFileCos({
          ...params,
          success: (result) => {
            resolve(result);
          },
          fail: (err) => {
            reject(err);
          },
        });
        // request("uploadIMFile", form(params, {})).then((res: any) => {
        //   if (res.code === 200) {
        //     resolve(res.data.result);
        //   } else {
        //     reject(new Error());
        //   }
        // });
      });
    },
    // 保存消息
    saveImMsg({ state, commit }, { ...params }) {
      let messageList = Array.from(state.messageList);
      messageList.push(params.msg);
      commit("setMessageList", messageList);
      // request("saveImMsg", params).then((res: any) => {
      //   console.log(res, "=====saveImMsg保存消息");
      // });
    },
    // 获取会话列表
    queryMessagesHistory({ commit }, { ...params }) {
      request("queryMessagesHistoryDesc", params).then((res: any) => {
        console.log(res, "=====queryMessagesHistory获取会话列表");
      });
    },
  },
};
