<template>
  <div>
    <van-nav-bar title="错题记录" left-text="返回" @click-left="$router.go(-1)" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :toggle="false" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option2" />
    </van-dropdown-menu>
    <div class="Wrong1">
      <div class="Wrong-div" style="margin-top:0.8rem">
        <p> [单选题]关于碳及其氧化物的说法正确的是</p>
      </div>
  
      <button class="Wrong-but"  @click="$router.push('/analysis')">查看详情</button>
    </div>
    <p style="font-size:0.24rem;text-align:center">没有更多了</p>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [{ text: "巩固错题", value: 0 }],
      option3: [{ text: "移除错题", value: 0 }]
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
