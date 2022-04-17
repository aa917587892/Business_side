import { request } from "./request.js";

 
export function getHomeMultidata(data) {
    return request({
      url: '/api/common/register',
      method: 'post',
      data:data
    })
  } 