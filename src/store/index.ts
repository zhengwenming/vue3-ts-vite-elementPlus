/*
 * @Author: fyh
 * @Date: 2020-01-14 22:46:02
 * @Desc: 聚合 store 模块
 */

import {createStore} from 'vuex'

const modules = {}
const context = require.context('./', true, /\.ts$/)
debugger
context.keys()
  .filter(item => item !== './index.ts')
  .map((key) => {
    debugger
    const namespace = key.replace(/(\.\/)|(\.ts)/g, '')

    const module = context(key).default
    modules[namespace] = {
      namespaced: true,
      ...module
    }
  })

export default createStore({
  modules
})
