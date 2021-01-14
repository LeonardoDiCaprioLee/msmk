<template>
  <div class="details">
      <!-- 头部 -->
    <van-nav-bar
      title="课程详情"
      left-arrow
    >
    <template #right> 
    <van-icon name="cluster-o" />
    </template>
    </van-nav-bar>

    <div class="main">
        <!-- 老师课堂 -->
        <div class="cd-info">
            <p class="title">李老师9号...</p>
            <p class="info-free">免费</p>
            <p class="info-item">共7课时 | 115人已报名</p>
            <p class="info-com">开课时间：2020.03.09 18:30 - 2020.03.15 15:00</p>
        </div>
        <!-- 老师详情 -->
        <div class="cd-teachers">
            <strong>教师团队</strong>
            <ul>
                <li>
                    <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
                    <span>李青</span>
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
        </div>
        <!-- 课程评价 -->
        <div class="cd-tro">
            <strong>课程评价</strong>
        </div>
    </div>
    
    <!-- 底部 -->
    <div class="footer">
        立即报名
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  filters: {},
  components: {},
  directives: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.details{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.footer{
    width: 100%;
    height : 0.8795rem;
    font-size: 0.48rem;
    text-align: center;
    line-height: 0.8795rem;
    background : #eb6100;
    color : white;
    position: fixed;
    bottom: 0px;
}

.main{
    background: #f0f2f5;
    flex : 1;
    .cd-info{
        padding: 0.3rem;
        background: white;
        .title{
            font-size: 0.32rem;
            font-weight: 700;
        }
        .info-free{
            height: 0.62rem;
            line-height: 0.62rem;
            color: #eb6100;
            font-size: 0.34rem;
        }
        .info-item{
            font-size: 0.3rem;
            height: 0.6rem;
            line-height: 0.6rem;
        }
        .info-com{
            font-size: 0.3rem;
            height: 0.6rem;
            line-height: 0.6rem;
        }
    }
    .cd-teachers{
        margin: 0.3rem 0px 0px;
        font-size: 0.3rem;
        margin: 0.3rem 0px 0px;
        background: white;
        height: 2.8994rem;
        padding: 0.1rem 0.2rem;
        strong{
            display: block;
            margin: 0.2rem 0px 0px;
        }
        ul {
            li{
                display:flex;
                flex-direction: column;
                padding: 0.2rem 0px;
                img{
                    width: 0.78rem;
                }
                span{
                    padding: 0.14rem 0.06rem 0px;
                }
            }
        }
    }
    .cd-tro{
        margin: 0.3rem 0px 0px;
        font-size: 0.3rem;
        margin: 0.3rem 0px 0px;
        background: white;
        height: 1.2992rem;
        padding: 0.1rem 0.2rem;
    }
}
</style>