<template>
  <div class="hty_boss">
    <div>  
      <Header></Header>
    </div>
    <div class="content_box">
        <router-view :key="this.$route.fullPath"></router-view>
    </div>
    <div class="footer_bottom">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default {
  name: "App",
  components: { Header, Footer }
};
</script>

<style scoped>
.content_box {
  height: 100%;
}
.hty_boss{
  position: relative;
  width: 100%;
  height: 100%;
}
.footer_bottom {
  height: 30px;
  display: block;
  position: fixed;
  width: 100%;
  margin: 0;
  bottom: 0;
  z-index: 999;
}
</style>