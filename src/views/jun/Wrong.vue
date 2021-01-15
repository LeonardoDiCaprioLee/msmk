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
    <div class="Wrong">
      <div class="Wrong-div" style="margin-top:0.8rem">
        <span>物理学史</span>
        <span style="color:#0088dd;">7道错题</span>
      </div>
      <p style="margin-left:1.3rem;margin-top:0.5rem;color: #b7b7b7">提交时间:2020/10/28 15:16:53</p>
      <button class="Wrong-but" @click="$router.push('/analysis')">巩固错题</button>
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
