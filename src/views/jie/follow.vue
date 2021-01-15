<template>
  <div>
    <van-nav-bar title="我的关注" left-arrow @click-left="$router.go(-1)" />
    <van-card
    v-for="(item,index) in 8"
    :key="index"
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fd69cd1825af28ee1a077108590ebffa9a10d7787.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613299386&t=47219824042e8ad5f636f79208e8e459"
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