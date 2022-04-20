
import { request } from "../../request";

export function get_task_list(){
    return request({
        url:'/api/merchant/task_list',
        method:'get'
    }) 
    }