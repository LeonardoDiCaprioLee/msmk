<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="curriculum">课程</van-tabbar-item>
      <van-tabbar-item icon="friends-o">约课记录</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/exercise">练习</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      active:1
    }
  },
  components: {
  }
}
</script>
<style lang="scss">
  .home{
    width: 100%;
    height: 100%;
  }
</style>
