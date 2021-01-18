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
    <van-sticky>
    <div class="follow" v-show='falg'>
      <div class="follow1">
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
    </van-sticky>
    <div class="follow" style="margin-top:-1.2rem;" v-show="falg=='false'">
      <div class="follow1" >
        <ul>
          <li>
            <img :src="arr.teacher_avatar" alt />
          </li>
          <li style="font-size:0.3rem;padding-top:0.2rem;">{{arr.teacher_name}}</li>
          <li style="font-size:0.3rem;padding-top:0.2rem;">
            <button @click='follow=!follow'>{{follow==true?'关注':'已关注'}}</button>
          </li>
        </ul>
      </div>
    </div>
    <!-- 关注 -->
    <div class="follow2">
      <van-tabs v-model="active">
        <van-tab title="讲师介绍">
          <span style="font-size:0.24rem;">老师简介</span>
        </van-tab>
        <van-tab title="主讲课程">
          <span style="font-size:0.24rem;">老师简介</span>
        </van-tab>
        <van-tab title="学院评价">
          <span style="font-size:0.24rem;">老师简介</span>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { indexdettails } from "../../utils/api/index.js";
export default {
  name: "",
  props: {},
  data() {
    return {
      id: "",
      active:'0',
      arr:[],
      falg:'',
      follow:true,
    };
  },
  mounted() {
    this.id = this.$route.query.id.teacher_id;
    console.log(this.$route.query.id);
    this.arr=this.$route.query.id
    this.falg='false'
    if(this.$route.query.id=='[object MouseEvent]'){
      console.log('666')
    this.falg='true'
      this.arr=[{teacher_id: 3, teacher_name: "杨德胜", teacher_avatar: "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png", introduction: "　杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和…别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。"}]
    }
     indexdettails(this.id).then(res => {
       console.log(res);
});
  },
  components: {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
