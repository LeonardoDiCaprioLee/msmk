<template>
  <div>
    <van-nav-bar title="题库选择" left-arrow @click-left="$router.go(-1)" />
    <van-search placeholder="请输入搜索关键词" />
    <van-sidebar style="width:30%;float:left;" v-model="activeKey">
      <van-sidebar-item title="求导题库" />
      <van-sidebar-item title="极限题库" />
      <van-sidebar-item title="生物" />
      <van-sidebar-item title="化学" />
      <van-sidebar-item title="数学" />
      <van-sidebar-item title="物理" />
    </van-sidebar>
    <div style="width:70%;float:left;height:7.2rem;background:white;">
        <ul>
            <li v-show="activeKey=='0'"><img src="@/assets/img/jun/n.gif" alt=""></li>
            <li v-show="activeKey=='1'">王慧杰2</li>
            <li v-show="activeKey=='2'">王慧杰3</li>
            <li v-show="activeKey=='3'">王慧杰4</li>
            <li v-show="activeKey=='4'">王慧杰5</li>
            <li v-show="activeKey=='5'">王慧杰6</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeKey: "0"
    };
  },
  mounted() {},
  components: {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
