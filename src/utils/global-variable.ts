/*
 * @Author: zhengwenming
 * @Date: 2020-01-15 21:40:05
 * @Desc: 全局通用变量
 */

import Vue from "vue";
const VUE_APP_API_ENV = process.env.VUE_APP_API_ENV; // 环境: dev-开发  uat-uat测试  prd-生产

//  图片访问前缀
export const picPrefix =
  VUE_APP_API_ENV === "prd"
    ? "https://txbsc-10076082.cos.ap-shanghai.myqcloud.com"
    : "https://tongxuebao-10076082.cos.ap-shanghai.myqcloud.com";

// 通讯key
export const appKey =
  VUE_APP_API_ENV === "prd"
    ? "6tnym1br6fg77"
    : VUE_APP_API_ENV === "dev"
      ? "cpj2xarlcm1bn"
      : "c9kqb3rdc2ewj";

// 全部查询条件默认值
export const conditionAllDeafultValue = "ALL";

// 字段为空时显示内容
export const emptyTxtFilter = (value: String) => {
  if (!value) {
    return "暂无";
  } else {
    return value;
  }
};

// 拼接imageUri
export const getFullImgUri = (imageUri) => {
  if (!imageUri) return "";
  if (/^https:\/\/|^http:\/\//.test(imageUri)) {
    return imageUri;
  }
  if (/\.com\//g.test(imageUri)) {
    return "https://" + imageUri;
  }
  if (/^\//.test(imageUri)) {
    return picPrefix + imageUri;
  }
  return picPrefix + "/" + imageUri;
};

// 登录界面显示项目版本
const projectVersion = "v1.3release-2005262000";

// 挂载到vue
// Vue.prototype.picPrefix = picPrefix;
// Vue.prototype.conditionAllDeafultValue = conditionAllDeafultValue;
// Vue.prototype.emptyTxtFilter = emptyTxtFilter;
// Vue.prototype.projectVersion = projectVersion;
// Vue.prototype.getFullImgUri = getFullImgUri;
