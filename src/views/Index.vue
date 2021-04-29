<template>
<div class="big_box">
  <Carousel></Carousel>
  <WeixinArticle></WeixinArticle>
</div>
</template>

<script>
import WeixinArticle from "@/views/index/WeixinArticle";
import Carousel from "@/views/index/Carousel";
export default {
  name: "Index",
  components:{ WeixinArticle,Carousel},
  data(){
    return{
      
    }
  }
};
</script>

<style>
  .big_box{
    width: 100%;
    padding-top: 1px;
  }
</style>