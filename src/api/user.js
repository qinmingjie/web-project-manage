import instance from './base'

export function login(data) {
  return instance({
    url: '/user/login',
    method: 'POST',
    data
  })
}

export function register(data) {
  return instance({
    url: '/user/register',
    method: 'POST',
    data
  })
}

export function getUser(params) {
  return instance({
    url: `/user/${params.id}`,
    method: 'GET'
  })
}
