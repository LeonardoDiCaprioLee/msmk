<template>
  <div class="currSelect">
    <van-tabs v-model="activeName" line-height="0px" @click="tabClick">
      <van-tab
        :name="item.activeName"
        v-for="item in selectData"
        :key="item.id"
      >
        <template #title>
          {{ item.title }}
          <van-icon name="arrow-down" v-show="!item.flag" />
          <van-icon name="arrow-up" v-show="item.flag" />
        </template>
        <template> </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 默认访问的下拉列表
      activeName: "classify",
      // 模拟选择的数据
      selectData: [
        {
          id: 1,
          title: "分类",
          // 访问的activeName
          activeName: "classify",
          // 是否显示下拉的状态值
          flag: false,
        },
        {
          id: 2,
          title: "排序",
          activeName: "sort",
          flag: false,
        },
        {
          id: 3,
          title: "筛选",
          activeName: "screen",
          flag: false,
        },
      ],
    };
  },
  methods: {
    // tabs点击触发事件
    tabClick(name, title) {
      // console.log(name);  // 打印name为绑定的那么值即数组中的activeName
      // 获取到对应的下标
      const index = this.selectData.findIndex((item) => {
        return (item.activeName = name);
      });
      // 将数组中对应下标数组中的flag取反
      this.selectData[index].flag = !this.selectData[index].flag;
    },
  },
  computed: {},
  filters: {},
  components: {},
  directives: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.currSelect {
  .van-tab {
    font-size: 0.3rem;
  }
}
</style>