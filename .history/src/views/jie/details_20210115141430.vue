<template>
  <div class="details">
    <!-- 头部 -->
    <van-nav-bar title="课程详情" left-arrow @click-left="$router.go(-1)">
      <template #right>
        <van-icon name="cluster-o" />
      </template>
    </van-nav-bar>

    <div class="main">
      <!-- 老师课堂 -->
      <div class="cd-info">
        <p class="title">
          <!-- {{ detailsData.teachers_list[0].teacher_name }} -->
          璐璐老师9号...
        </p>
        <p class="info-free">
          <span v-if="detailsData.underlined_price <= 0">免费</span>
          <span v-else>${{ detailsData.underlined_price }}</span>
        </p>
        <p class="info-item">
          共{{ detailsData.total_periods }}课时 | 115人已报名
        </p>
        <p class="info-com">开课时间：2020.03.09 18:30 - 2020.03.15 15:00</p>
      </div>
      <!-- 老师详情 -->
      <div class="cd-teachers">
        <strong>教师团队</strong>
        <ul>
          <li>
              {{detailsData.teachers_list[0].teacher_avatar}}
            <img :src="detailsData.teachers_list[0].teacher_avatar" alt="" />
            <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
            <span>{{ detailsData.teachers_list[0].teacher_name }}</span>
          </li>
        </ul>
      </div>
      <!-- 课程介绍 -->
      <div class="cd-tro">
        <strong>教师团队</strong>
      </div>
      <!-- 课程大纲 -->
      <div class="cd-tro">
        <strong>课程大纲</strong>
        <img
          src="@/assets/img/jie/1610674687774.jpg"
          alt=""
          @click="$toast.fail('请先登录')"
        />
      </div>
      <!-- 课程评价 -->
      <div class="cd-tro">
        <strong>课程评价</strong>
        <h2 v-show="!$store.state.token">登录后查看</h2>
        <img src="@/assets/img/jie/pingjia.jpg" alt=""  v-show="$store.state.token"/>
      </div>
    </div>

    <!-- 底部 -->
    <div class="footer" @click="enlist">
      <span v-show="detailsData.has_buy">立即报名</span>
      <span v-show="!detailsData.has_buy">已报名</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 详情数据
      detailsData: [],
    };
  },
  methods: {
    //   立即报名方法
    enlist() {
      //   如果用户没有登录 那么进行提示
      // console.log(!this.detailsData.has_buy)
      if (this.$store.state.token == "") {
        this.$toast.loading({
          message: "正在跳转登录页面...",
          forbidClick: true,
          duration : 1000
        });
        this.$router.push("/login")
      }
      if (!this.detailsData.has_buy) {
        //   如果已经报名提示用户已经报名
        return this.$toast.success("你已经报名该课程啦！");
      }
      //   如果登录成功 那么就进行报名操作
      this.$toast.loading({
        message: "正在报名...",
        forbidClick: true,
      });

      this.$toast.success("报名成功");

      // 改变是否购买的状态
      this.detailsData.has_buy = false;
    },
  },
  computed: {},
  filters: {},
  components: {},
  directives: {},
  mounted() {
    console.log(this.detailsData);
    this.detailsData = this.$route.query;
    //   console.log(this.$route.query)
    //   console.log(this.detailsData.teachers_list[0].teacher_name)
  },
};
</script>

<style lang="scss" scoped>
.details {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.footer {
  width: 100%;
  height: 0.8795rem;
  font-size: 0.48rem;
  text-align: center;
  line-height: 0.8795rem;
  background: #eb6100;
  color: white;
  position: fixed;
  bottom: 0px;
}

.main {
  background: #f0f2f5;
  flex: 1;
  .cd-info {
    padding: 0.3rem;
    background: white;
    .title {
      font-size: 0.32rem;
      font-weight: 700;
    }
    .info-free {
      height: 0.62rem;
      line-height: 0.62rem;
      color: #eb6100;
      font-size: 0.34rem;
    }
    .info-item {
      font-size: 0.3rem;
      height: 0.6rem;
      line-height: 0.6rem;
    }
    .info-com {
      font-size: 0.3rem;
      height: 0.6rem;
      line-height: 0.6rem;
    }
  }
  .cd-teachers {
    margin: 0.3rem 0px 0px;
    font-size: 0.3rem;
    margin: 0.3rem 0px 0px;
    background: white;
    height: 2.8994rem;
    padding: 0.1rem 0.2rem;
    strong {
      display: block;
      margin: 0.2rem 0px 0px;
    }
    ul {
      li {
        display: flex;
        flex-direction: column;
        padding: 0.2rem 0px;
        img {
          width: 0.78rem;
        }
        span {
          padding: 0.14rem 0.06rem 0px;
        }
      }
    }
  }
  .cd-tro {
    margin: 0.3rem 0px 0px;
    font-size: 0.3rem;
    margin: 0.3rem 0px 0px;
    background: white;
    // height: 1.2992rem;
    padding: 0.1rem 0.2rem;
    overflow: scroll;
    padding-bottom: 1rem;
    img {
      width: 100%;
    }
    h2 {
      margin: 0.6rem;
    }
  }
}
</style>