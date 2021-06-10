import request from '@/utils/request'

export function uploadImg(param) {
  return request({
    url: '/usermanage/api/uploadImg',
    method: 'post',
    data: param
  })
}

export function batchUploadImg(param) {
  return request({
    url: '/usermanage/api/uploadImg',
    method: 'post',
    data: param
  })
}
