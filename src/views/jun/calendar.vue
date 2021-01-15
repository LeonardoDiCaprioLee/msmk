<template>
  <div>
    <van-nav-bar title="我的课表" left-arrow @click-left="$router.go(-1)" />
    <van-calendar :poppable="false" :show-confirm="false" :style="{ height: '500px' }" />

    <p style="font-size:0.38rem;margin:0.4rem">当日课程</p>
    <van-steps direction="vertical" :active="-1">
      <van-step>
        <h3>
          <span>16:00-18:00</span>
          <span style="margin-left:0.3rem;font-weight:bold;color:black">雅思英语七日冲刺</span>
          <span style="margin-left:0.3rem;background:red;color:white">一对一</span>
        </h3>
      </van-step>
      <van-step>
        <h3>
          <span>16:00-18:00</span>
          <span style="margin-left:0.3rem;font-weight:bold;color:black">雅思英语七日冲刺</span>
          <span style="margin-left:0.3rem;background:red;color:white">一对一</span>
        </h3>
      </van-step>
      <van-step>
        <h3>
          <span>16:00-18:00</span>
          <span style="margin-left:0.3rem;font-weight:bold;color:black">雅思英语七日冲刺</span>
          <span style="margin-left:0.3rem;background:red;color:white">一对一</span>
        </h3>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  components: {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
