import storage from '@/utils/storage'

export default (to, from, next) => {
  let target

  if (to.name === 'login' && storage.getItem('token')) {
    target = { name: from.name }
  }
  if (to.name !== 'login' && !storage.getItem('token')) {
    target = { name: 'login' }
  }
  next(target)
}