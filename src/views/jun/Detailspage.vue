<template>
  <div class="Detailspage">
    <!-- 首页详情页 -->
    <div class="blue">
      <div style="font-size:0.4rem;padding-top:0.2rem;">
        <span style="color:white;padding-left:0.4rem;" @click="$router.go(-1)"><</span>
        <span style="color:white;padding-left:2.2rem;">讲师详情</span>
      </div>
    </div>
    <!-- 关注 -->

    <div class="follow">
      <div class="follow1" v-show="falg">
        <ul>
          <li>
            <img src="@/assets/img/jun/n.gif" alt />
          </li>
          <li style="font-size:0.3rem;padding-top:0.2rem;">暂无数据</li>
          <li style="font-size:0.3rem;padding-top:0.2rem;">
            <button>关注</button>
          </li>
        </ul>
      </div>
    </div>

    <div class="follow" style="margin-top:-1.2rem;" v-show="falg=='false'">
      <div class="follow1">
        <ul>
          <li>
            <img :src="arr.avatar" alt />
          </li>
          <li style="font-size:0.3rem;padding-top:0.2rem;">{{arr.real_name}}</li>
          <li style="font-size:0.3rem;padding-top:0.2rem;">
            <button @click="guanzhu">{{this.gz==2?'关注':'已关注'}}</button>
          </li>
        </ul>
      </div>
    </div>

    <!-- 关注 -->

    <div class="follow2">
      <van-sticky @scroll="scroll1">
        <van-tabs v-model="active">
          <van-tab name="0" title="讲师介绍">
            <span
              style="font-size:0.24rem;"
            >{{arr.introduction}}</span>
          </van-tab>
          <van-tab name="1" title="主讲课程">
            <span
              style="font-size:0.24rem;"
            >主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程主讲课程</span>
          </van-tab>
          <van-tab name="2" title="学院评价">
            <span
              style="font-size:0.24rem;"
            >学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价学院评价</span>
          </van-tab>
        </van-tabs>
      </van-sticky>
    </div>
  </div>
</template>

<script>
import { indexdettails, indexgz } from "../../utils/api/index.js";
export default {
  name: "",
  props: {},
  data() {
    return {
      id: "",
      active: "0",
      arr: [],
      falg: "",
      follow: true,
      gz: 1
    };
  },
  mounted() {
    this.id = this.$route.query.id.teacher_id;
    this.arr = this.$route.query.id;
    console.log(this.arr);
    this.falg = "false";
    if (this.$route.query.id == "[object MouseEvent]") {
      this.falg = "true";
      this.arr = [
      ];
    }
    indexdettails(this.id).then(res => {
      // console.log(res);
      this.arr=res.data.teacher
      this.gz = res.data.flag
    });
  },
  components: {},
  computed: {},
  methods: {
    guanzhu() {
      // this.gz = 0;
      console.log(this.id);
      indexgz(this.id).then(res => {
        console.log(res);
        this.gz = res.data.flag;
        // console.log(this.gz)
        if(this.gz==2){
           this.$toast('取消关注');
        }else{
           this.$toast('成功关注');
        }
      });
    },
    scroll1(data) {
      // console.log(data)
      if (data.scrollTop > 500) {
        this.active = "0";
      }
      if (data.scrollTop > 1000) {
        this.active = "1";
      }
      if (data.scrollTop > 1500) {
        this.active = "2";
      }
    }
  }
};
</script>

<style scoped>
</style>
