<template>
  <div class="cards" @scroll="scroll">
    <van-card
      v-for="(item, index) in currData"
      :key="index"
      num="免费"
      price="2.00"
      :title="item.title"
      @click="
        $router.push({
          path: '/details',
          query: { item: item.course_classify_id },
        })
      "
    >
      <template #price> {{ item.brows_num }}人已报名 </template>
      <template #num>
        <img
          style="width: 1.2rem; position: absolute; top: 0.2rem; right: 0.2rem"
          src="@/assets/img/jie/1611047474391.jpg"
          alt=""
          v-if="item.has_buy == 1"
        />
        <span style="color: green">免费</span>
      </template>
      <template #thumb>
        <img :src="item.cover_img" alt="" class="cover_img" />
      </template>
    </van-card>
    <div class="search" v-show="this.show == true">
      <p>没有关于{{$route.query.name}}的数据</p>
    </div>
  </div>
</template>

<script>
import { courseBasis } from "../utils/api/index";
export default {
  data() {
    return {
      currData: [],
      currData2: [],
      // 搜索数据
      searchList:'',
      show:false
    };
  },
  methods: {
    scroll() {
      console.log(1);
    },
  },
  computed: {},
  filters: {},
  components: {},
  directives: {},
  async created() {
    let res = await courseBasis();
    console.log(res);
    this.searchList = this.$route.query.name
    this.currData = res.data.list;
    this.currData2 = res.data.list;
    if(this.searchList == '') {
      this.currData = this.currData2  
    }
    if(this.searchList != undefined) {
      this.currData = this.currData2.filter(res=>{
          return res.title == this.searchList
      })
      if(this.currData.length!=0) {
        this.show = false
      } else {
        this.show = true
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.cards {
  padding-bottom: 0.4rem;
}
.van-card {
  border-radius: 0.2rem;
}
.cover_img {
  width: 100%;
  height: 100%;
}
.search{
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  p{
    width: 100%;
    text-align: center;
    line-height: 3rem;
    font-size: 0.26rem;
  }
}
</style>