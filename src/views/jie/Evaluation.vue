<template>
  <div>
    <van-nav-bar
      title="测评记录"
      right-text="按钮"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-dropdown-menu>
      <van-dropdown-item title="类型不限" v-model="value1" :options="option1" />
      <van-dropdown-item title="时间" v-model="value2" :options="option2" />
    </van-dropdown-menu>

    <van-card title="物理学史">
      <template #desc>
        <br />
        <span>答题时长：0分41秒 正确率：0%</span> <br /> <br>
        <span>提交时间：2020-10-28 15：16：53</span>
      </template>
      <template #footer class="btns">
        <van-button size="mini" @click="$router.push('/analysis')">查看解析</van-button>
        <van-button size="mini" @click="$router.push('/analysis')">重新练习</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "1",
      value2: "2",
      option2: [
        { text: "全部", value: 1 },
        { text: "今天", value: 2 },
        { text: "7天", value: 3 },
      ],
      option1: [
        { text: "全部", value: 1 },
        { text: "套卷练习", value: 2 },
        { text: "仿真模考", value: 3 },
        { text: "考点专练", value: 3 },
      ],
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
.btns{
    .van-button{
        width: 2rem !important;
        border-radius: 0.2rem;
    }
}
</style>