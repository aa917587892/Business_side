
import { request } from "../../request";

export function blacklist(prompt ){
    return request({
        url:'/api/merchant/blacklist',
        method:'get',
        prompt
    }) 
    }