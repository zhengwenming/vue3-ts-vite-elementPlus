import { createApp } from 'vue'
import App from './App.vue'
// reset css
import "./assets/css/reset.scss";
// 全局 css
import "./assets/css/global.scss";
// 使用 normalize.css 修改元素默认样式，达到多浏览器样式一致
import "./assets/css/normalize.css";

// 引入并安装路由插件
import router from "@/router/index";

// 像El-Message这样的是不能自动引入的使用的时候还是要导入，
// import { ElMessage } from 'element-plus' ，而且样式会失效，在main.ts文件中加入以下代码，引入消息的样式文件（如果文件路径报错，在node_modules/element-plus目录下找找看）
// 参考链接：https://www.jianshu.com/p/13c405104ed8
// import "element-plus/theme-chalk/el-message.css";
// 备注：我发现文章中的说法有误，可以实现自动导入(自动导入到配置文件auto-imports.d.ts里面)，样式也可以实现自动导入。在vite.config.ts中配置了自动导入后，直接使用ElMessage({message: '登录成功',type: 'success',})，无需import，无需关注样式，且样式不会丢失



import * as ElIconModules from '@element-plus/icons'


console.log('VUE_APP_API_ENV = '+process.env.env);
// 创建一个根组件
const app = createApp(App)


//注意：el-icon还是需要在main.js手动导入
// 统一注册el-icon图标
for(let iconName in ElIconModules){
    app.component(iconName,ElIconModules[iconName])
  }


//配置全局变量
const projectVersion = "v1.3release-2005262000";
app.config.globalProperties.$projectVersion = projectVersion
// 使用路由插件
app.use(router)
// 挂载到 #app 节点
app.mount('#app')
// app.use(ElementPlus, { size: 'small', zIndex: 3000 })
// Object.keys(ElIcon).forEach(function (key) {
//     app.component(ElIcon[key].name, ElIcon[key])
// })
