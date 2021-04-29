<template>
  <header class="hty_header">
    <b-navbar class="header_nav">
      <template slot="brand">
        <img class="logo_img" :src="headImg" alt="logo" style="heigh: 200px" />
        <b-navbar-item
          class="is-hidden-desktop"
          tag="router-link"
          :to="{ path: '/' }">
          主页
        </b-navbar-item>
      </template>
            <template slot="start">
              <div class="title_content" style="width:300px">平遥古城游记分享平台</div>
            </template>
      <template slot="start">
        <b-navbar-item tag="div">
            <b-input
              v-model="searchKey"
              class="search_input"
              placeholder="搜索帖子、标签和用户"
              @keyup.enter.native="search()"/>
            <p class="control">
              <b-button class="is-info" @click="search()">查找</b-button>
            </p>
        </b-navbar-item>
      </template>
      <template slot="end">
        <nav>
          <router-link to="/"> 首页 <span>Index</span></router-link>
          <router-link to="/post"> 博文 <span>Post</span></router-link>
          <router-link to="/reserve"> 预定 <span>Reserve</span></router-link>
          <router-link to="/service"> 服务 <span>Service</span></router-link>
        </nav>
      </template>

      <template slot="end">
        <b-navbar-item v-if="token == null || token === ''" tag="div">
          <div class="buttons">
            <b-button
              class="is-light"
              tag="router-link"
              :to="{ path: '/register' }">
              注册
            </b-button>
            <b-button
              class="is-light"
              tag="router-link"
              :to="{ path: '/login' }">
              登录
            </b-button>
          </div>
        </b-navbar-item>

        <b-navbar-dropdown v-else :label="user.alias" style="width:150px">
          <b-navbar-item
            tag="router-link"
            :to="{ path: `/member/${user.username}/home` }"
          >
            🧘 个人中心
          </b-navbar-item>
          <hr class="dropdown-divider" />
          <b-navbar-item
            tag="router-link"
            :to="{ path: `/member/${user.username}/setting` }"
          >
            ⚙ 设置中心
          </b-navbar-item>
          <hr class="dropdown-divider" />
          <b-navbar-item tag="a" @click="logout"> 👋 退出登录 </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </header>
</template>

<script>
import {
  disable as disableDarkMode,
  enable as enableDarkMode,
} from "darkreader";
import { getDarkMode, setDarkMode } from "@/utils/auth";
import { mapGetters } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      logoUrl: require("@/assets/logo.png"),
      headImg: require("@/assets/image/logo01.png"),
      searchKey: "",
      darkMode: false,
    };
  },
  computed: {
    ...mapGetters(["token", "user"]),
  },
  watch: {
    // 监听Theme模式
    darkMode(val) {
      if (val) {
        enableDarkMode({});
      } else {
        disableDarkMode();
      }
      setDarkMode(this.darkMode);
    },
  },
  created() {
    // 获取cookie中的夜间还是白天模式
    this.darkMode = getDarkMode();
    if (this.darkMode) {
      enableDarkMode({});
    } else {
      disableDarkMode();
    }
  },
  methods: {
    async logout() {
      this.$store.dispatch("user/logout").then(() => {
        this.$message.info("退出登录成功");
        setTimeout(() => {
          this.$router.push({ path: this.redirect || "/" });
        }, 500);
      });
    },
    search() {
      console.log(this.token);
      if (this.searchKey.trim() === null || this.searchKey.trim() === "") {
        this.$message.info({
          showClose: true,
          message: "请输入关键字搜索！",
          type: "warning",
        });
        return false;
      }
      this.$router.push({ path: "/search?key=" + this.searchKey });
    },
  },
};
</script>

<style scoped>
input {
  width: 80%;
  height: 86%;
}
.logo_img {
  width: 80px;
  height: 70px;
  margin: 10px auto 0 50px;
}
.hty_header {
  width: 100%;
  height: 80px;
  background-color: #fff;
  position: fixed;
  z-index: 999;
}
.header_nav{
  background-color: #fff;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.089);
}
.header_nav nav {
  display: block;
  width: 500px;
  float: right;
  margin: 10px auto 10px auto;
  font-size: 1.2em;
}
.header_nav nav a{
  padding: 10px;
  font-weight: bold;
  display: block;
  float: left;
  width: 90px;
  border-radius: 5px;
  margin-left: 30px;
  color: rgb(70, 70, 70);
}
.header_nav nav a span{
  font-size: 0.9em;
  color: rgb(71, 71, 71);
  font-weight: normal;
}
.header_nav nav a:hover{
  color: #000;
  background-color: #f5f5f6;
}
.search_input{
  border: none;
  height: 42px;
  width: 200px;
}
.search_input .input{
  border: none;
}
.search_input .input:focus{
  outline: none;
}
.is-info{
  margin-left: 50px;
}
.has-dropdown{
  width: 150px;
}
.title_content{
  font-weight: bold;
  font-family: "金陵";
  font-size: 1.3em;
  line-height: 3em;
  margin: 15px auto auto 20px;
}
</style>