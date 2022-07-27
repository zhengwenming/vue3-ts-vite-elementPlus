import storage from '@/utils/storage'

export default (to, from, next) => {
  // 将 document.title 设置成路由配置中每一个路由记录的 name
  document.title = to.meta?.title;
  let target
  if (to.name === 'login' && storage.getItem('token')) {
    target = { name: from.name }
  }
  if (to.name !== 'login' && !storage.getItem('token')) {
    target = { name: 'login' }
  }
  next(target)
}