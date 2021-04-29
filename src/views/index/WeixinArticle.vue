<template>
  <div class="container">
    <div class="hty_gz_card">
        <p>查看更多<br>精彩平遥古城特辑</p>
        <a href="https://weibo.com/pingyaogucheng"></a>
        <a href="https://mp.weixin.qq.com/s/7xr8PcdNlhyX-jf7p9f7tg"></a>
    </div>
    <div class="hty_gz_card hty_gz_p">
        <img src="../../assets/image/wx001.jpg"/>
        <p>“晋商神韵·民俗古城”五一演出表来了！</p>
        <p>2021.4.26</p>
        <a href="https://mp.weixin.qq.com/s/vVPC0pDWnXvK45Knn2-D0A">了解更多</a>
        <div></div>
    </div>
    <div class="hty_gz_card hty_gz_p">
        <img src="../../assets/image/wx002.jpg"/>
        <p>“请苏来，晋等你”文旅推介活动走进江苏，平遥古城亮相</p>
        <p>2021.4.15</p>
        <a href="https://mp.weixin.qq.com/s/CMd9q1sxM8b2vnUo-fy9TA">了解更多</a>
        <div></div>
    </div>
    <div class="hty_gz_card hty_gz_p">
        <img src="../../assets/image/wx003.jpg"/>
        <p>平遥古城：晋韵流芳 阅尽明清六百年（附美图）</p>
        <p>2021.3.15</p>
        <a href="https://mp.weixin.qq.com/s/nIyzTZ8RzSxeQCfrg0fQkA">了解更多</a>
        <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeixinArticle",
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 600px;
}
.hty_gz_card {
  float: left;
  width: 23%;
  height: 470px;
  background-color: rgb(255, 255, 255);
  margin: 50px 1%;
  border-radius: 5px;
  position: relative;
}

.container .hty_gz_card:nth-child(1){
    background:     none;
}

.container .hty_gz_card:nth-child(1) p{
    font-family: "金陵";
    font-weight: bold;
    font-size: 1.1em;
    margin: 50px 20px 20px;
    line-height: 1.5em;
}
.container .hty_gz_card:nth-child(1) a{
    display: block;
    float: left;
    margin: 0 8px;
    width: 30px;
    height: 30px;
    background-size: cover;
}

.container .hty_gz_card:nth-child(1) a:nth-child(2){
    background-image: url('../../assets/image/weibo.png');
    margin-left: 20px;
}
.container .hty_gz_card:nth-child(1) a:nth-child(3){
    background-image: url('../../assets/image/weixin.png');
}
.hty_gz_p{
  padding: 20px;
}
.hty_gz_p p:nth-child(2){
    font-size: 1.4em;
    font-weight: bold;
    margin-top: 20px;
}
.hty_gz_p p:nth-child(3){
    position: absolute;
    font-size: 1.1em;
    color: rgb(143, 143, 143);
    top: 340px;
}
.hty_gz_p a{
    display: block;
    font-size: 1.1em;
    font-weight: bold;
    position: absolute;
    top: 400px;
}

.hty_gz_p div{
    width: 90px;
    height: 2px;
    background-color: rgb(34, 34, 34);
    position: absolute;
    top: 430px;
}
.hty_gz_p img{
  width: 100%;
}
</style>