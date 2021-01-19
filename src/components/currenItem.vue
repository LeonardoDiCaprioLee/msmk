<template>
  <div class="cards" @scroll="scroll">
    <van-card
      v-for="(item, index) in currData"
      :key="index"
      num="免费"
      price="2.00"
      :title="item.title"
      @click="$router.push({path:'/details',query:{item:item.course_classify_id}})"
    >
      <template #price> {{ item.brows_num }} 人已报名 </template>
      <template #num>
        <span style="color: green">免费</span>
      </template>
      <template #thumb>
        <img :src="item.cover_img" alt="" class="cover_img" />
      </template>
    </van-card>
  </div>
</template>

<script>
import { courseBasis } from "../utils/api/index";
export default {
  data() {
    return {
      currData: [],
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
  async mounted() {
    let res = await courseBasis();
    this.currData = res.data.list;
    // console.log(this.currData.splice(0, 5));
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
</style>