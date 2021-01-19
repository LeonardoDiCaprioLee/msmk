<template>
  <div class="home">
    <van-loading v-show="$store.state.loding" />
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/curriculum">课程</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/record">约课记录</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/exercise">练习</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
        <!-- 定位联系我们 -->
    <div class="contact" @click="$router.push('/message')" v-drag>
      <van-icon name="envelop-o" />
    </div> 
    <!-- 定位联系我们 -->
   
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 1
    };
  },
  components: {},
    directives: {
    drag(el, binding, vnode) {
      // console.log(vnode);
      var maxW = document.documentElement.clientWidth;
      var maxH = document.documentElement.clientHeight;

      var startX = 0;
      var startY = 0;

      el.addEventListener("touchstart", function(e) {
        startX = e.targetTouches[0].pageX - this.offsetLeft;
        startY = e.targetTouches[0].pageY - this.offsetTop;
      });
      el.addEventListener("touchmove", function(e) {
        var leftX = e.targetTouches[0].pageX - startX;
        var topY = e.targetTouches[0].pageY - startY;
        var thisW = e.targetTouches[0].target.clientWidth;
        var parentW = e.targetTouches[0].target.offsetParent.clientWidth;
        var thisH = e.targetTouches[0].target.clientHeight;
        var parentH = e.targetTouches[0].target.offsetParent.clientHeight;

      

        this.style.left = leftX + "px";
        this.style.top = topY + "px";
        // this.innerHTML = "我又被揪起来了，真烦人!";
      });
      //   el.addEventListener("touchend", function(e) {
      //     this.innerHTML = "你终于放弃揪着我了，谢谢!";
      //   });
    }
  }
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
