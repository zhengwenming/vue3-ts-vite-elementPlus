import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/reset.scss";
import "./assets/css/global.scss";
// 引入并安装路由插件
import router from "@/router/index";

console.log('VUE_APP_API_ENV = '+process.env.env);

createApp(App).use(router).mount('#app')
