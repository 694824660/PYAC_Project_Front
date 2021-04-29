<template>
  <div class="container" style="padding-top: 115px">
    <div class="box">
      <weather></weather>
    </div>
    <div class="columns">
      <div class="column is-three-quarters">
        <TopicList></TopicList>
      </div>
      <div class="column">
        <CardBar></CardBar>
      </div>
    </div>
  </div>
</template>

<script>
import Weather from "@/views/card/Weather"
import { getBillboard } from "@/api/billboard"
import CardBar from "@/views/card/CardBar"
import PostList from "@/views/post/Index"

export default {
  name: "Post",
  components:{
    CardBar,
    TopicList: PostList,
    Weather
  },
  data() {
    return {
      billboard: {
        content: "",
      },
    };
  },
  created() {
    this.fetchBillboard();
  },
  methods: {
    async fetchBillboard() {
      getBillboard().then((value) => {
        const { data } = value;
        this.billboard = data;
      });
    },
  },
};
</script>