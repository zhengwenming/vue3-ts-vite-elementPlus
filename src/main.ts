import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/reset.scss";
import "./assets/css/global.scss";
// 引入并安装路由插件
import router from "@/router/index";
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import 'element-plus/packages/theme-chalk/src/base.scss'

//3.注意：el-icon还是需要在main.js手动导入
// import * as ElIcon from '@element-plus/icons-vue'

const projectVersion = "v1.3release-2005262000";

console.log('VUE_APP_API_ENV = '+process.env.env);
const app = createApp(App)
app.config.globalProperties.$projectVersion = projectVersion
app.use(router).mount('#app')
// app.use(ElementPlus, { size: 'small', zIndex: 3000 })
// Object.keys(ElIcon).forEach(function (key) {
//     app.component(ElIcon[key].name, ElIcon[key])
// })
