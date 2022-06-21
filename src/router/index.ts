import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import protectLogin from './interceptor/protect-login'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name:'home',
    meta: {
      noLogin: true
    },
    component: () => import("@/views/Home/index.vue")
  },
  {
    path: '/login',
    name:'login',
    component: () => import("@/views/Login/index.vue")
  },
]

//路由器
 const router =  createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(protectLogin)
export default router

