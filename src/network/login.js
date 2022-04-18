import { request } from "./request.js";

 
export function post_registered(data) {
    return request({
      url: '/api/common/register',
      method: 'post',
      data:data
    })
  } 

export function post_login(data) {
  return request({
    url: '/api/common/login',
    method: 'post',
    data:data
  })
} 