/*
 * @Author: zhengwenming
 * @Date: 2020-06-19 00:09:45
 * @Desc: sessionStorage/localStorage封装
 */
let type = 'localStorage'

const setType = (newType: string) => (type = newType)

const storageType = (type: string) => {
  if (type) {
    return type === 'session' ? sessionStorage : localStorage
  }
  return sessionStorage.getItem('token') ? sessionStorage : localStorage
}

class Storage {
  init(type: string) {
    setType(type)
  }

  length() {
    return storageType(type).length
  }

  key(index: any) {
    return storageType(type).key(index)
  }

  getItem(key: string) {
    return storageType(type).getItem(key)
  }

  setItem(key: string, value: string) {
    return storageType(type).setItem(key, value)
  }

  removeItem(key: string) {
    return storageType(type).removeItem(key)
  }

  clear() {
    return storageType(type).clear()
  }

  // 获取所有的localstorage key
  getAll() {
    Object.keys(storageType(type)).forEach(item => {
      console.log(item)
    });
  }

  // 【废弃】获取im 群组未读数
  getAllUnReadNum() {
    let curUserImId = storageType(type).getItem("userImId");
    let unReadeCountKey = "rong_cu" + curUserImId + "3";
    let hasUnReadGroup = false;
    Object.keys(storageType(type)).forEach(item => {
      if (item.startsWith(unReadeCountKey) && !hasUnReadGroup) {
        hasUnReadGroup = true
      }
    });
    console.log("==========登录后,是否有未读消息", hasUnReadGroup)
    if (hasUnReadGroup) {
      //
    }
    return hasUnReadGroup
  }



  loginOutClear() {
    storageType(type).removeItem("userInfo")
    storageType(type).removeItem("permision")
    storageType(type).removeItem("token")
    storageType(type).removeItem("currGroupInfo")
    storageType(type).removeItem("applyEndTime")
    storageType(type).removeItem("countDownSeconds")
    storageType(type).removeItem("doctorStatus")
    storageType(type).removeItem("newMessage")
    storageType(type).removeItem("groupList")
    storageType(type).removeItem("isNewsFlag")
    storageType(type).removeItem("systemMsgCount")
    storageType(type).removeItem("setMenusTree")
    storageType(type).removeItem("source")
    storageType(type).removeItem("jumpGroupId")
    storageType(type).removeItem("messageList")
    storageType(type).removeItem("userImId")
  }
}

export default new Storage()
