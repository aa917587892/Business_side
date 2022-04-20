import { request } from "../../request";

export function get_add() {     //获取发布任务表单参数
    return request({
      url: '/api/merchant/task_config',
      method: 'get',
    })
  }

export function get_shop_list() {     //获取店铺
    return request({
      url: '/api/merchant/get_shop_list',
      method: 'get',
    })
  }


export function post_computed(data) {       //计算属性
    return request({
      url: '/api/merchant/count_service_fee',
      method: 'post',
      data
    })
  }

  
export function post_add(data) {    //提交任务接口
    return request({
      url: '/api/merchant/publish_task',
      method: 'post',
      data
    })
  } 