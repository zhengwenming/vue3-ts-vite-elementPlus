/*
 * @Author: fyh
 * @Date: 2020-01-07 00:09:45
 * @Desc: 请求拦截
 */
import storage from "@/utils/storage";
import tokenKey from "@/utils/token-key";

export default [
  (config: any) => {
    // 设置请求头 token
    if (storage.getItem(tokenKey)) {
      config.headers.token = `${storage.getItem(tokenKey)}`;
    }
    return config;
  },
  (error: any) => Promise.reject(error),
];
