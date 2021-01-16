<template>
  <div>
    <van-nav-bar title="学习卡兑换" left-arrow @click-left="$router.go(-1)" />

    <van-form>
      <van-field
        v-model="studyInp"
        name="用户名"
        label="卡号"
        placeholder="请输入学习卡号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="studyPwd"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" style="background:orange; border:none;"
        @click="duihuan" >立即兑换</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        studyInp:"",
        studyPwd : "",
        arr : [],
    };
  },
  methods: {
      duihuan(){
          this.arr = JSON.parse(sessionStorage.getItem("studyArr")) || [];

          this.arr.push(this.studyInp)

          this.arr.forEach(item => {
              item == this.studyInp;
              return this.$toast.success("亲,你已经兑换过了")
          })

          this.$toast.success("兑换成功")
      }
  },
  computed: {},
  filters: {},
  components: {},
  directives: {},
  mounted() {},
};
</script>

<style scoped>
</style>