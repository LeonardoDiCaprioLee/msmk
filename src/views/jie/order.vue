<template>
  <div class="order">
    <div class="title">
      <p style="display: flex; justify-content: space-between">
        <span>{{ info.title }}</span>
        <span>{{ info.sales_num }}</span>
      </p>
      <p>共{{ info.course_type }}课时</p>
    </div>

    <div class="coupon">
        <p>优惠券</p>
        <p>无可用</p>
    </div>

    <div class="more">
        <p>
            <span>商品金额</span>
            <span>0</span>
        </p>
        <p>
            <span>优惠券金额</span>
            <span>0</span>
        </p>
        <p>
            <span>合计</span>
            <span>0</span>            
        </p>
    </div>
    <van-submit-bar :price="0" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { downOrder } from "../../utils/api/index";
export default {
  data() {
    return {
      info: {},
    };
  },
  methods: {
      async onSubmit(){
          let res = await downOrder();
          console.log(res)
      }
  },
  computed: {},
  filters: {},
  components: {},
  directives: {},
  mounted() {
    this.info = {
      checked_coupon: false,
      coupon_id: 0,
      discounted_price: 0,
      full_reduction: 0,
      name: "",
      __proto__: Object,
      course_type: 3,
      end_play: 1611244800,
      has_coupon: 0,
      is_materials: 0,
      order_price: 0,
      price: 0,
      sales_num: 1,
      section_num: 1,
      start_play: 1611158400,
      stock: 312,
      teacher_name: "小张",
      title: "node.js",
    };
    // console.log(this.$route.query.res)
    // this.info = this.$route.query.res.data.info;
    console.log(this.info);
  },
};
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  height: 100%;
  font-size: 0.22rem;
  padding: 0.2rem;
  border-radius: 0.2rem;
  .title {
      border-radius: 0.2rem;
    background: white;
    p:nth-of-type(1) {
      padding: 0.2rem;
      span:nth-of-type(2){
          color: red;
          font-size: 0.3rem;
      }
    }
    p:nth-of-type(2) {
      padding: 0.3rem 0.2rem;
    }
  }
  .coupon{
      display: flex;
      justify-content: space-between;
      padding: 0.3rem;
      background: white;
      margin-top: 0.2rem;
      border-radius: 0.2rem;
  }
  .more{
      margin-top: 0.2rem;
      padding: 0.3rem;
      border-radius: 0.2rem;
      background: white;
      p{
          margin: 0.1rem 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
      }
  }
}
</style>