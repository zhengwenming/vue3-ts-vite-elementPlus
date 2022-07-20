/*
 * @Author: fyh
 * @Date: 2020-01-17 22:55:18
 * @Desc: 消息通知共享模块
 */

import { request } from '@/services'
import storage from '@/utils/storage'

export default {
  state: {
    systemMsgCount: 0
  },
  getters: {
    systemMsgCount(state: any) {
      return state.systemMsgCount
    }
  },
  mutations: {
    setSystemMsgCount(store: any, value: any) {
      let oldCount = storage.getItem("systemMsgCount");
      storage.setItem('systemMsgCount', value)
      store.systemMsgCount = value
      // 如果先的消息数量 > 之前的数量
      if (value > oldCount) {
        let audioDom = new Audio();
        audioDom.src = require('@/assets/notify.mp3');
        audioDom.play()
      }
    }
  },
  actions: {
    getNotifyTotalCount({ commit }) {
      return new Promise((resolve, reject) => {
        // request("getNotifyTotalCount").then((res: any) => {
        //   if (res.code === 200) {
        //     commit('setSystemMsgCount', res.data)
        //     resolve()
        //   } else {
        //     reject(new Error())
        //   }
        // }
        // )
      })
    }
  }
}
