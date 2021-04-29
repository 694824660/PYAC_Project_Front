<template>
    <div class="weather" v-if="tip.lives">
        <span>{{tip.lives[0].city}}</span>
        <span>{{tip.lives[0].weather}}</span>
        <span>实时气温</span>
        <span>{{tip.lives[0].temperature}}°</span>
        <span>更新时间  {{tip.lives[0].reporttime}}</span>
    </div>
</template>
<script>
import { getWeather } from "@/api/weather";

export default {
  name: 'Weather',
  data(){
      return{
          tip: {}
      }
  },
  created() {
    this.weatherShow()
  },
  methods: {
    weatherShow() {
        getWeather().then(response => {
            console.log(response.data.lives[0]);
            const { data } = response;
            this.tip = data;
        })
    }
  }
}

// city: "平遥县"
// humidity: "13"
// province: "山西"
// reporttime: "2021-04-28 20:04:11"
// temperature: "17"
// weather: "阴"
// winddirection: "西"
// windpower: "5"
</script>

<style scoped>
.weather{
    font-size: 1.1em;
    font-weight: bold;
    height: 22px;
}
.weather span:nth-child(1),
.weather span:nth-child(2),
.weather span:nth-child(3){
    display: block;
    float: left;
    margin-left: 30px;
}
.weather span:nth-child(4){
    display: block;
    float: left;
    margin-left: 10px;
}
.weather span:nth-child(5){
    display: block;
    float: right;
    margin-right: 10px;
    font-weight: normal;
    color: rgb(136, 136, 136);
    font-size: 0.9em;
}
</style>


