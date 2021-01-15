<template>
  <div>
    <van-nav-bar title="我的关注" left-arrow @click-left="$router.go(-1)" />
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="@/assets/img/jie/ter.png"
    />
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

<style scoped>
</style>