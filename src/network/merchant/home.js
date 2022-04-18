import { request } from "../request";

export function get_home() {
    return request({
      url: '/api/merchant/index',
      method: 'get',
    })
  } 

  export function get_shop() {
    return request({
      url: ' /api/merchant/config',
      method: 'get',
    })
  } 