<template>
  <div>
    <van-nav-bar title="开通会员" left-text left-arrow @click-left="$router.go(-1)" />
    <p style="font-size:0.32rem;padding:0.5rem;">开通会员免费学习</p>
    <p style="font-size:0.3rem;margin-top:0.5rem">
      <span style="font-weight:bold;font-size:0.4rem;padding-left:0.2rem;">购买会员</span>
      <span style="padding-left:0.3rem">购买会员后可免费观看会员课程</span>
    </p>
    <van-button type="warning" class="zhifu" @click="zf">立即支付</van-button>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  components: {},
  computed: {},
  methods: {
    zf() {
      this.$dialog.confirm({
        title: "提示",
        message: "你确定购买此会员"
      })
        .then(() => {
          // on confirm
          this.$toast('购买成功');
        })
        .catch(() => {
          // on cancel
          this.$toast('取消购买');
        });
    }
  }
};
</script>

<style scoped>
.zhifu {
  position: absolute;
  width: 80%;
  margin-left: 10%;
  bottom: 1rem;
}
</style>
