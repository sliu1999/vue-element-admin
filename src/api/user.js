import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/authservice/api/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/authservice/api/current',
    method: 'get',
    params: { token }
  })
}

export function logout(token) {
  return request({
    url: '/authservice/api/logout',
    method: 'get'
  })
}

export function getRoutes(token) {
  return request({
    url: '/authservice/api/menus',
    method: 'get',
    params: { token }
  })
}
