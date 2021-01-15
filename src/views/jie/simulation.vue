<template>
  <div>
    <van-nav-bar
      title="仿真练习"
      right-text="按钮"
      left-arrow
      @click-left="$router.go(-1)"
    />

    <van-dropdown-menu>
      <van-dropdown-item title="套卷练习" v-model="value1" :options="option1" />
      <van-dropdown-item title="考试状态" v-model="value2" :options="option2" />
      <van-dropdown-item title="参考状态" v-model="value2" :options="option3" />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
        value1 : "1",
        value2 : "2",
        option1 : [
            { text : "全部" ,value: 1},
            { text : "模拟考试" ,value: 2},
            { text : "真实考试" ,value: 3}
        ],
        option2 : [
            { text : "全部" ,value: 1},
            { text : "未开始" ,value: 2},
            { text : "进行中" ,value: 3},
            { text : "已结束",value: 3}
        ],
        option3 : [
            { text : "全部" ,value: 1},
            { text : "已做" ,value: 2},
            { text : "未做" ,value: 3},
        ]
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

<style scoped>
</style>