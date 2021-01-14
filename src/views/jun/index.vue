<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banner" :key="index">
        <img :src="item.banner_img" style="width:100%;height:4rem" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图 -->
    <!-- 小框框 -->
    <div class="index-kinds">
      <ul>
        <li>
          <img src="@/assets/img/jun/l.png" alt />
          <p style="font-size:0.2rem">特色课</p>
        </li>
        <li>
          <img src="@/assets/img/jun/lv.png" alt />
          <p style="font-size:0.2rem">一对一辅导</p>
        </li>
        <li>
          <img src="@/assets/img/jun/h.png" alt />
          <p style="font-size:0.2rem">学习日历</p>
        </li>
      </ul>
    </div>
    <!-- 小框框 -->
    <div v-for="(item,index) in arr" :key="index">
      <!-- title -->
      <p class="op-title" v-for="(item1,index1) in item" :key="index1">{{item1.name}}</p>
      <!-- title -->
      <!-- 老师分类 -->
      <div v-show="item.channel_info.sort==1" class="oto-content" v-for="(item2,index2) in item.list" :key="index2">
        <div class="oc-item">
          <img class :src="item2.teacher_avatar" alt />
          <ul>
            <li>{{item2.teacher_name}}</li>
            <li style="margin-top:0.2rem;color:#b7b7b7;">{{item2.introduction}}</li>
          </ul>
        </div>
      </div>
      <!-- 老师分类 -->
    </div>
  </div>
</template>

<script>
// 引入请求数据
import { getBanners } from "../../utils/api/index.js";
// 引入公共css
// import "@/assets/css/jun.scss";
// 引用主页面数据
import arr from "./arr.js";
export default {
  name: "",
  props: {},
  data() {
    return {
      // 轮播图
      banner: [],
      arr: []
    };
  },
  mounted() {
    getBanners().then(res => {
      this.banner = res;
      console.log(res);
    });
    this.arr = arr[0].data;
    console.log(this.arr);
  },
  components: {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
