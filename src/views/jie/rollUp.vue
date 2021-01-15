<template>
  <div class="rollUp">
    <van-nav-bar title="套卷练习" right-text="按钮" left-arrow @click-left="$router.go(-1)"/>

    <van-dropdown-menu>
      <van-dropdown-item title="套卷分类" ref="item">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="全部" />
          <van-sidebar-item title="中考真题" />
          <van-sidebar-item title="化学" />
          <van-sidebar-item title="英语" />
        </van-sidebar>
      </van-dropdown-item>
      <van-dropdown-item title="套卷状态" v-model="value" :options="option2" />
    </van-dropdown-menu>
    <br />
    <span class="lodingContent">请稍后套卷正在赶来的路上啦...</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 1,
      value2: 2,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "全部商品", value: 0 },
        { text: "全部商品", value: 0 },
      ],
      option2: [
        { text: "全部", value: 0 },
        { text: "已做", value: 0 },
        { text: "未做", value: 0 },
      ],
      activeKey : 0,
    };
  },
  methods: {},
  computed: {},
  filters: {},
  components: {},
  directives: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.lodingContent {
  display: block;
  font-size: 0.2rem;
  width: 100%;
  text-align: center;
}
</style>