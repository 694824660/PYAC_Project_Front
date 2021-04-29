import request from '@/utils/requestWeather'

export function getWeather() {
    return request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo?key=376f6598f81c48d5138b811d7b6c7a6f&city=140728',
      method: 'get',
    })
  }