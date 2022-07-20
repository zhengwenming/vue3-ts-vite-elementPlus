/*
 * @Author: fyh
 * @Date: 2020-01-17 22:55:18
 * @Desc: 会员共享模块
 */

import storage from "@/utils/storage";

export default {
  state: {
    currMemberId: null,
    groupId: null,

    applicationId: null,

    currGroupInfo: {},

    groupList: JSON.parse(storage.getItem("groupList")),
    countDownSeconds: storage.getItem("countDownSeconds"),

    isNewsFlag: storage.getItem("isNewsFlag"),
    newMessage: null,
    newMessageImgList: JSON.parse(storage.getItem("newMessageImgList")) || [],
    newMessageSightList:
      JSON.parse(storage.getItem("newMessageSightList")) || [],
  },

  getters: {
    groupId: (state) => state.groupId,
    currGroupInfo: (state) => state.currGroupInfo,
    groupList: (state) => state.groupList,
    countDownSeconds: (state) => state.countDownSeconds,

    isNewsFlag: (state) => state.isNewsFlag,
    newMessage: (state) => state.newMessage,
    newMessageImgList: (state) => state.newMessageImgList,
    newMessageSightList: (state) => state.newMessageSightList,
  },
  mutations: {
    setGroupId(store: any, value: any) {
      storage.setItem("groupId", value);
      store.groupId = value;
    },
    setCurrGroupInfo(store: any, value: any) {
      if (value) {
        storage.setItem("currGroupInfo", JSON.stringify(value));
      } else {
        storage.removeItem("currGroupInfo");
      }
      store.currGroupInfo = value;
    },
    setGroupList(store: any, value: any) {
      storage.setItem("groupList", JSON.stringify(value));
      store.groupList = value;
    },
    setCountDownSeconds(store: any, value: any) {
      storage.setItem("countDownSeconds", value);
      store.countDownSeconds = value;
    },
    setIsNewsFlag(store: any, value: any) {
      storage.setItem("isNewsFlag", value);
      store.isNewsFlag = value;
    },
    setNewMessage(store: any, value: any) {
      storage.setItem("newMessage", value);
      store.newMessage = value;
    },
    setNewMessageImgList(store: any, value: any) {
      storage.setItem("newMessageImgList", JSON.stringify(value));
      store.newMessageImgList = value;
    },
    setNewMessageSightList(store: any, value: any) {
      storage.setItem("newMessageSightList", JSON.stringify(value));
      store.newMessageSightList = value;
    },
  },
  actions: {
    // 根据群组ID切换到当前聊天群组
    setCurrGroupInfo({ state, commit }, { groupId, source }) {
      console.log(
        groupId,
        source,
        "===============根据群组ID切换到当前聊天群组"
      );
      storage.setItem("source", source);
      storage.setItem("jumpGroupId", groupId);
    },
  },
};
