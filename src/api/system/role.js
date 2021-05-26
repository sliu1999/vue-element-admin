import request from '@/utils/request'

/**
 * 获取所有角色下拉列表
 * @param {}} data 
 * @returns 
 */
export function getAllRole() {
  return request({
    url: '/usermanage/api/getAllRole',
    method: 'get'
  })
}
