export default [
    {
      name: 'login',
      path: '/login',
      meta: {
        noLogin: true
      },
      component: () => import('@/layouts/Login/index.vue')
    }
  ]