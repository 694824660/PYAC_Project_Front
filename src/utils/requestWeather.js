import axios from 'axios'


// 1.创建axios实例
const service = axios.create({
  // 公共接口--这里注意后面会讲,url = base url + request url
  baseURL: process.env.VUE_WEATHER_URL,

  // baseURL: 'https://api.example.com',
  // 超时时间 单位是ms，这里设置了5s的超时时间
  timeout: 5 * 1000
})

// 设置cross跨域 并设置访问权限 允许跨域携带cookie信息,使用JWT可关闭
export default service 