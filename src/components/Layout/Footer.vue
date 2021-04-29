<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_left_text">

        <span style="float: right">
        </span>
      </div>

      <div>
        <span>{{ title }} ALL RIGHTS RESERVED</span>
        <div style="float: right">
          <template>
            <b-taglist attached>
              <b-tag type="is-dark" size="is-normal">Design</b-tag>
              <b-tag type="is-info" size="is-normal">{{ author }}</b-tag>
            </b-taglist>
          </template>
        </div>
      </div>
    </div>
    <back-top></back-top>
  </footer>
</template>

<script>
import BackTop from "@/components/Backtop/BackTop";
export default {
  name: "Footer",
  components: {
    BackTop
  },
  data() {
    return {
      title: "© " + new Date().getFullYear() + ' 胡廷煜',
      author: 'Hushi',
    };
  },
};
</script>

<style scoped>
footer {
  display: block;
  height: 20px;
  background: none;
  margin: 0;
}
.footer{
  padding: 0;
}
footer a{
  color: #000000;
}
.footer_left_text,
span,
span a{
  color: rgb(0, 0, 0);
  font-size: 15px;
}
span a:nth-child(1){
  color: #124de5;
}
</style> 