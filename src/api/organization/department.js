import request from '@/utils/request'

export function getDepartTree() {
  return request({
    url: '/usermanage/api/departments/treeTwo',
    method: 'get'
  })
}

export function getDepartTreeExceptMe(param) {
  return request({
    url: '/usermanage/api/departments/treeExceptMe',
    method: 'get',
    params: param
  })
}

export function getDepartListExceptMe(param) {
  return request({
    url: '/usermanage/api/departments/treeExceptMeList',
    method: 'get',
    params: param
  })
}

export function saveDepart(data) {
  return request({
    url: '/usermanage/api/departments',
    method: 'post',
    data: data
  })
}


export function queryDepartInfo(id){
  return request({
    url: '/usermanage/api/departments/'+id,
    method: 'get'
  })
}


export function deleteDepartInfo(id){
  return request({
    url: '/usermanage/api/departments/'+id,
    method: 'delete'
  })
}
