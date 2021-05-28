import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/usermanage/api/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/usermanage/api/vue/current',
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
    url: '/usermanage/api/vue/menus',
    method: 'get',
    params: { token }
  })
}

export function getMenuTree() {
  return request({
    url: '/usermanage/api/menus/treeTwo',
    method: 'get'
  })
}

export function getRoleMenuTree(roleId) {
  return request({
    url: '/usermanage/api/menus/tree/'+roleId,
    method: 'get'
  })
}

