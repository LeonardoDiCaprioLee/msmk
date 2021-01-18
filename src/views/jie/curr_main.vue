<template>
  <div class="currMain">
    <currItem :currData="chooseGrades"></currItem>
  </div>
</template>

<script>
import eventBus from "./eventBus";
import currItem from "@/components/currenItem";
export default {
  data() {
    return {
      list: [
        {
          id: 254,
          title:
            "每时每课-初一英语-want、think about以及询问某人喜欢某物、三餐等习题讲解",
          price: 0,
          course_type: 5,
          course_classify_id: 36,
          sales_base: 23,
          start_play_date: 0,
          end_play_date: 0,
          underlined_price: 0,
          browse_base: 0,
          browse_num: 74,
          sales_num: 31,
          total_periods: 1,
          has_buy: 0,
          is_vip: 0,
          is_has_coupon: 0,
          teachers_list: [
            {
              id: 194,
              teacher_avatar:
                "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
              teacher_name: "璐璐",
              course_basis_id: 254,
            },
          ],
          brows_num: 74,
        },
        {
          id: 253,
          title:
            "每时每课-初一英语-want、think about以及询问某人喜欢某物、三餐等知识点",
          price: 0,
          course_type: 5,
          course_classify_id: 36,
          sales_base: 23,
          start_play_date: 0,
          end_play_date: 0,
          underlined_price: 0,
          browse_base: 0,
          browse_num: 23,
          sales_num: 27,
          total_periods: 1,
          has_buy: 0,
          is_vip: 0,
          is_has_coupon: 0,
          teachers_list: [
            {
              id: 194,
              teacher_avatar:
                "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
              teacher_name: "璐璐",
              course_basis_id: 253,
            },
          ],
          brows_num: 23,
        },
        {
          id: 248,
          title: "每时每课-初一英语-一般现在时中have的用法习题讲解",
          price: 0,
          course_type: 5,
          course_classify_id: 36,
          sales_base: 12,
          start_play_date: 0,
          end_play_date: 0,
          underlined_price: 0,
          browse_base: 0,
          browse_num: 16,
          sales_num: 15,
          total_periods: 1,
          has_buy: 0,
          is_vip: 0,
          is_has_coupon: 0,
          teachers_list: [
            {
              id: 194,
              teacher_avatar:
                "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
              teacher_name: "璐璐",
              course_basis_id: 248,
            },
          ],
          brows_num: 16,
        },
        {
          id: 247,
          title: "每时每课-初一英语-一般现在时中have的用法知识点",
          price: 0,
          course_type: 5,
          course_classify_id: 36,
          sales_base: 11,
          start_play_date: 0,
          end_play_date: 0,
          underlined_price: 0,
          browse_base: 0,
          browse_num: 9,
          sales_num: 12,
          total_periods: 1,
          has_buy: 0,
          is_vip: 0,
          is_has_coupon: 0,
          teachers_list: [
            {
              id: 194,
              teacher_avatar:
                "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
              teacher_name: "璐璐",
              course_basis_id: 247,
            },
          ],
          brows_num: 9,
        },
        {
          id: 252,
          title: "每时每课-初二英语-一般现在时中have的用法知识点",
          price: 3,
          course_type: 5,
          course_classify_id: 36,
          sales_base: 11,
          start_play_date: 0,
          end_play_date: 0,
          underlined_price: 3,
          browse_base: 0,
          browse_num: 9,
          sales_num: 12,
          total_periods: 1,
          has_buy: 0,
          is_vip: 0,
          is_has_coupon: 0,
          teachers_list: [
            {
              id: 194,
              teacher_avatar:
                "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
              teacher_name: "李青",
              course_basis_id: 247,
            },
          ],
          brows_num: 9,
        },
        {
          id: 249,
          title: "每时每课-初二英语-一般现在时中have的用法知识点",
          price: 3,
          course_type: 5,
          course_classify_id: 36,
          sales_base: 11,
          start_play_date: 0,
          end_play_date: 0,
          underlined_price: 3,
          browse_base: 0,
          browse_num: 9,
          sales_num: 12,
          total_periods: 1,
          has_buy: 0,
          is_vip: 0,
          is_has_coupon: 0,
          teachers_list: [
            {
              id: 194,
              teacher_avatar:
                "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
              teacher_name: "李青",
              course_basis_id: 247,
            },
          ],
          brows_num: 9,
        },
        {
          id: 255,
          title: "每时每课-初二英语-一般现在时中have的用法知识点",
          price: 3,
          course_type: 5,
          course_classify_id: 36,
          sales_base: 11,
          start_play_date: 0,
          end_play_date: 0,
          underlined_price: 3,
          browse_base: 0,
          browse_num: 9,
          sales_num: 12,
          total_periods: 1,
          has_buy: 0,
          is_vip: 0,
          is_has_coupon: 0,
          teachers_list: [
            {
              id: 194,
              teacher_avatar:
                "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
              teacher_name: "李青",
              course_basis_id: 247,
            },
          ],
          brows_num: 9,
        },
        {
          id: 1133,
          title: "每时每课-初三数学-一般现在时中have的用法知识点",
          price: 3,
          course_type: 5,
          course_classify_id: 36,
          sales_base: 11,
          start_play_date: 0,
          end_play_date: 0,
          underlined_price: 3,
          browse_base: 0,
          browse_num: 9,
          sales_num: 12,
          total_periods: 1,
          has_buy: 0,
          is_vip: 0,
          is_has_coupon: 0,
          teachers_list: [
            {
              id: 194,
              teacher_avatar:
                "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
              teacher_name: "李青",
              course_basis_id: 247,
            },
          ],
          brows_num: 9,
        },
        {
          id: 1122,
          title: "每时每课-初三数学-一般现在时中have的用法知识点",
          price: 3,
          course_type: 5,
          course_classify_id: 36,
          sales_base: 11,
          start_play_date: 0,
          end_play_date: 0,
          underlined_price: 3,
          browse_base: 0,
          browse_num: 9,
          sales_num: 12,
          total_periods: 1,
          has_buy: 0,
          is_vip: 0,
          is_has_coupon: 0,
          teachers_list: [
            {
              id: 194,
              teacher_avatar:
                "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
              teacher_name: "王麻子",
              course_basis_id: 247,
            },
          ],
          brows_num: 9,
        },
      ],
    };
  },
  methods: {},
  computed: {
    chooseGrades() {
      let arr = [];
      let chooseGrades = this.$store.state.chooseGrades;
      let str = chooseGrades.join("");
      this.list.forEach((item) => {
        // for (let i = 0; i < chooseGrades.length; i++) {
          if (item.title.indexOf(str) > -1) {
            arr.push(item);
        // }
      }
      });
      return arr;
    },
  },
  filters: {},
  components: {
    currItem,
  },
  directives: {},
  mounted() {
    
  },
  created() {},
  updated() {},
};
</script>

<style lang="scss" scoped>
.currMain {
  padding: 0.3rem 0.3rem 1rem;
  overflow: scroll;
  font: inherit;
  // 渲染的div
  .currItem {
    width: 6.9rem;
    height: 3.5794rem;
    background: white;
    padding: 0 0.28rem;
    border-radius: 0.2rem;
    margin-bottom: 0.3rem;
    // 标题
    .title {
      padding-top: 0.3rem 0px 0px;
      font {
        font-size: 0.44rem;
        font-weight: 700;
      }
    }
    // 时间
    .time {
      font-size: 0.24rem;
      height: 0.6rem;
      display: flex;
      align-items: center;
    }

    // 任课老师
    .teacher {
      height: 1.2996rem;
      .teacher-item {
        margin: 0;
        width: 1.54rem;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 0.54rem;
        }
        span {
          font-size: 0.24rem;
          color: gray;
        }
      }
    }
    // 报名价格
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.7rem;
      .person {
        font-size: 0.26rem;
        color: gray;
      }
      .free {
        font-size: 0.32rem;
        color: #44a426;
      }
    }
  }
}
</style>
