import { request } from "../../request";

export function get_add() {
    return request({
      url: '/api/merchant/task_config',
      method: 'get',
    })
  }

  
export function post_computed(data) {
    return request({
      url: '/api/merchant/count_service_fee',
      method: 'post',
      data
    })
  }

  
export function post_add(data) {
    return request({
      url: '/api/merchant/publish_task',
      method: 'post',
      data
    })
  } 