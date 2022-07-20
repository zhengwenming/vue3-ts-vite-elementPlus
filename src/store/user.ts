/*
 * @Author: fyh
 * @Date: 2020-01-07 00:09:45
 * @Desc: 用户模块store
 */

import { request } from "@/services";
import storage from "@/utils/storage";
import tokenkey from "@/utils/token-key";
import routes from "@/router/routes";

import RongIM from "@/utils/chat.ts";

export default {
  state: {
    userInfo: JSON.parse(storage.getItem("userInfo")),
    menusTree: JSON.parse(storage.getItem("setMenusTree")),
  },
  getters: {
    userInfo: (state) => state.userInfo,
    menusTree: (state) => state.menusTree,
  },
  mutations: {
    setUserInfo(store: any, value: any) {
      if (value) {
        store.userInfo = value;
        storage.setItem("userInfo", JSON.stringify(value));
      } else {
        storage.removeItem("userInfo");
      }
    },
    setMenusTree(store: any, value: any) {
      store.menusTree = value;
    },
  },
  actions: {
    // 发送手机验证码
    sendSMSCode({ commit }, { ...params }) {
      return new Promise((resolve, reject) => {
        request("sendSMSCode", params)
          .then((res: any) => {
            if (res.code === 200) {
              resolve(res);
            } else {
              reject(res);
            }
          })
          .catch((err: any) => {
            reject(err);
          });
      });
    },

    /**
     * 登录
     */
    login({ commit }, { ...params }) {
      return new Promise((resolve, reject) => {
        request("login", params)
          .then((res: any) => {
            if (res.code === 200) {
              resolve(res);
            } else {
              reject(res);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    /**
     * 退出登录
     *
     */
    loginOut({ commit }, { ...params }) {
      let _RongIM: any = RongIM;
      return new Promise((resolve, reject) => {
        request("loginOut", params).then((res: any) => {
          if (res.code === 200) {
            try {
              _RongIM.Client.logout(); // 融云退出
            } catch (err) {
              console.log(err);
            }
            commit("setUserInfo");
            storage.loginOutClear();
            resolve(res);
          } else {
            reject(res);
          }
          commit("setUserInfo", null);
        });
      });
    },

    /**
     * 获取用户菜单权限
     */
    getMenuTree({ dispatch, commit, state }, { ...params }) {
      return new Promise((resolve, reject) => {
        request("getMenuTree", params).then((res: any) => {
          if (res.code === 200) {
            if (Array.isArray(res.data) && res.data.length > 0) {
              let menusTree = res.data;
              const myRoutes = routes;
              const findRouteName = (myRoutes) => {
                for (let item of myRoutes) {
                  if (item.hasOwnProperty("meta")) {
                    const findMenuName = (menusTree: any) => {
                      for (let menu of menusTree) {
                        if (menu.menuPath === item.meta.href) {
                          menu.route = item.path ? item.path : "";
                        }
                        if (menu.hasOwnProperty("children") && menu.children) {
                          findMenuName(menu.children);
                        }
                      }
                    };
                    findMenuName(menusTree);
                  }

                  if (item.hasOwnProperty("children") && item.children) {
                    findRouteName(item.children);
                  }
                }
              };
              findRouteName(myRoutes);
              commit("setMenusTree", menusTree);
              storage.setItem("setMenusTree", JSON.stringify(menusTree));
              resolve();
            } else {
              commit("setMenusTree", []);
              storage.setItem("setMenusTree", null);
              reject(new Error());
            }
          } else {
            commit("setMenusTree", []);
            storage.setItem("setMenusTree", null);
            reject(new Error());
          }
        });
      });
    },
  },
};
