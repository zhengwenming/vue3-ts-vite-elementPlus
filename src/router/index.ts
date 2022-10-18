import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import protectLogin from './interceptor/protect-login'

const routes: Array<RouteRecordRaw> = [
  //重定向
  {
    path: '/',
    redirect: '/login',
    name:'/',
  },
  {
    path: '/main',
    name:'main',
    //路由独享守卫（如果进入主页面，立马进入触发二级路由页面home）
    beforeEnter:((to,from,next)=>{
      if (to.path==='/main') {
        router.push('/home')
      } else {
          next()
      }
  }),
    meta:{
      title:'首页'
    },
    component: () => import("@/layouts/Main/index.vue"),
    children: [
      {
        path: '/home',
        name:'home',
        meta:{
          title:'首页'
        },
        component: () => import("@/views/Home/index.vue")
      },
      {
        path: '/article',
        name:'article',
        meta:{
          title:'系统设置'
        },
        component: () => import("@/views/Article/index.vue")
      },
      {
        path: '/setting',
        name:'setting',
        meta:{
          title:'系统设置'
        },
        component: () => import("@/views/Setting/index.vue")
      },
    ],
  },
  {
    path: '/login',
    name:'login',
    meta:{
      title:'登录'
    },
    component: () => import("@/views/Login/index.vue")
  },
    // 前面的路由都没有匹配到404 页面 
    // Vue3配置错误路由重定向写法--https://blog.csdn.net/qq_43291759/article/details/118879550
    { path: "/:catchAll(.*)", redirect: { name: "404" } },
]

//路由器
 const router =  createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(protectLogin)
export default router

