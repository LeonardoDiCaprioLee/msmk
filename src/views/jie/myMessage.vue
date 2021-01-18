<template>
  <div>
    <van-nav-bar title="消息中心" left-text="返回" left-arrow @click-left="$router.go(-1)"/>
    <div
      class="message border-bottom"
      v-for="(item, index) in msg"
      :key="index"
      @click="$router.push('/noMsg')"
    >
      <img :src="item.image" alt="" />
      <div>
        <!-- 课程通知 -->
        <p>{{ item.title }}</p>
        <span>{{ item.msgs }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {courseBasis} from "../..//utils/api/index.js"
export default {
  data() {
    return {
      msg: [
        {
          image: "/whj_img/图层 2.png",
          title: "课程通知",
          msgs: "暂无消息",
        },
        {
          image: "/whj_img/图层 3.png",
          title: "系统通知",
          msgs: "暂无消息",
        },
        {
          image: "/whj_img/我的订单-1.png",
          title: "订单通知",
          msgs: "暂无消息",
        },
      ],
    };
  },
  methods: {},
  computed: {},
  filters: {},
  components: {},
  directives: {},
  mounted() {
      courseBasis()
  },
};
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  font-size: 0.22rem;
  margin-top: 0.1rem;
  padding: 0.4rem 0.2rem;
  img {
    width: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.1rem 0.4rem;
  }
}
</style>