<template>
  <div>
    <!-- 二级菜单 -->
    <div class="message-menu">
      <span>给我们留言</span>
      <span></span>
    </div>
    <div
      style="font-size:0.3rem;width:100%;height:1.5rem;padding:0.4rem"
    >你好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题</div>
    <div style="padding:0.4rem;">
      <span style="font-size:0.3rem;">电话</span>
      <van-field style="margin-top:0.2rem;" placeholder="请输入" />
      <span style="font-size:0.3rem;">留言内容</span>
      <van-field style="margin-top:0.2rem;" placeholder="请输入" />
      <van-button type="info" style="width:100%">提交</van-button>
    </div>
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
  methods: {}
};
</script>

<style scoped>
</style>
