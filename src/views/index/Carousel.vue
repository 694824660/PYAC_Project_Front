<template>
  <div class="carousel_div">
    <template>
      <el-carousel :interval="5000" arrow="always" height="500px">  
        <el-carousel-item v-for="item in items" :key="item.index">
          <p class="item_pOne">{{item.title}}</p>
          <p class="item_pTwo">{{item.content}}</p>
          <img class="carousel_img" :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
        items:[
            { url: require("../../assets/image/img001.png") , title: "27/Apr.2021" , content: "用泰式的青春绘出年轻的优雅"},
            { url: require("../../assets/image/img002.png") , title: "26/Apr.2021" , content: "一封请柬，奔赴晋祠的陪嫁之旅"},
            { url: require("../../assets/image/img003.png") , title: "24/Apr.2021" , content: "以佛塔之名，探寻佛国秘境"},
            { url: require("../../assets/image/img004.png") , title: "23/Apr.2021" , content: "寻觅山水田园，不负春光"}
        ]
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .carousel_div{
    width: 100%;
    height: 500px;
    margin: 95px auto 0;
  }
    .carousel_img{
    width: 100%;
    margin: 0!important;
  }
  .item_pOne,
  .item_pTwo{
    display: block;
    position: absolute;
    font-family: "金陵";
    font-size: 2em;
    color: white;
    text-shadow: 1px 1px 3px rgb(22, 22, 22);
  }
  .item_pOne{
    top: 100px;
    left: 300px;
  }
  .item_pTwo{
    top: 150px;
    left: 300px;
  }
</style>