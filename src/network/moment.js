import {request} from "./request";

export function getMoments() {
  return request({
    url: '/436?pageNo=1&recordsperpage=5&form.orderColumn=publish_time&form.orderAsc=desc'
  }).catch(err => err)
}