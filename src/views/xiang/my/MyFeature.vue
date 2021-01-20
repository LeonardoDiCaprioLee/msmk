<template>
  <div class="myFeature">
    <van-sticky>
      <van-nav-bar title="我的特色课" left-arrow @click-left="onClickLeft" />
      <van-tabs v-model="active" class="border-bottom"  line-width="20px" @click="myStudyFn">
        <van-tab v-for="(item,index) in myStudyTitle" :key="index" :title="item.name" :name="item.type"></van-tab>
      </van-tabs>
    </van-sticky>
    <div class="myFeature_list">
        <ul>
          <li v-for="(item,index) in myStudyList" :key="index"> 
            <p>{{item.title}}</p>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { myStudy } from "@/utils/api/index";
export default {
  data() {
    return {
      myStudyTitle:[],  // 标题
      myStudyList:[],   // 数据
      active:2
    };
  },
  async created() {
    let data = await myStudy()
    if(data.code==200) {
      this.myStudyTitle = data.data.typeNum
      this.myStudyList = data.data.courseList
    }
  },
  mounted() {},
  methods: {
      onClickLeft() {
          this.$router.go(-1)
      },
      myStudyFn() {
          myStudy().then(async res=>{
            let data = await res.data.courseList
            this.myStudyList = data.filter(item=>{
              
            })
          })
      }
  },
};
</script>

<style lang="scss" scoped>
  .myFeature{
    width: 100%;
      background-color: #fff;
    .myFeature_list{
      width: 100%;
      ul{
        width: 100%;
        padding: 0 0.3rem;
        li{
          width: 100%;
          margin-top: 0.2rem;
          height: 3rem;
          box-shadow: 0 0 10px -7px;
        }
      }
    }
  }
</style>
