/*
 * @Author: fyh
 * @Date: 2020-01-09 16:56:07
 * @Desc: 用户相关接口
 */

import Ajax from '../convertors/ajax-config'

const ajax = (config?: any) => new Ajax(config)

// 发送手机验证码
export const sendSMSCode = ajax().post(`/user/auth/login/smsCode`)

// 登录
// export const login = ajax().post(`/auth/login`)
export const login = ajax().post(`/user/auth/browser/account/login`)

// 退出
export const loginOut = ajax().post(`/user/auth/browser/logout`)

// 刷新token
export const refreshToken = ajax().get(`/auth/refreshToken`)

// 获取菜单
// export const getMenuTree = ajax().get(`/auth/initMenu`)
export const getMenuTree = ajax().get(`user/auth/browser/menu/init`)

// 变更工作状态
export const changeWorkState = ajax().get(`/auth/changeWorkState`)

// 加载个人信息
export const loadEmployeeInfo = ajax().get(`/auth/loadEmployeeInfo`)

// 修改个人信息
export const modifyEmployeeInfo = ajax().post(`/auth/modifyEmployeeInfo`)

// 修改密码
export const modifyEmployeePwd = ajax().post(`/auth/modifyEmployeePwd`)
