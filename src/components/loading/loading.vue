<template>
  <div id="loading" v-show="show">
    <div>拼命加载中……</div>
  </div>
</template>
<script>
export default {
  name: "loading",
  data() {
    return {
      show: Boolean,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
#loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
    div{
        background-color: #333;
        color: #fff;
        padding: 0.05rem .1rem;
        text-align: center;
        line-height: 0.4rem;
        font-size: 0.28rem;
    }
}
</style>
