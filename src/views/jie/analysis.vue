<template>
  <div>
    <van-nav-bar
      left-arrow
      style="background: transparent"
      class="border-bottom"
      @click-left="$router.go(-1)"
    >
      <template #right>
        <div class="icons">
          <van-icon name="chat-o" size="10" />
          <van-icon name="star-o" />
          <van-icon name="balance-list-o" />
        </div>
      </template>
    </van-nav-bar>

    <div class="border-top border-bottom Physics">
      <span>物理</span>

      <div>
        <span class="bigInt">1</span>
        <span>/</span>
        <span>8</span>
      </div>
    </div>

    <div class="choose">
      <header>
        <span class="choosSome">多选</span>
        <span class="bigOne">1.</span> 6.下列叙述正确的是( )
      </header> <br>
      <form>
        <p>
          <input type="checkbox" name="" id="" disabled />
          <span> A.</span> 6.下列叙述正确的是( )
        </p> <br>
        <p>
          <input type="checkbox" name="" id="" disabled />
          <span> A.</span> 6.下列叙述正确的是( )
        </p> <br>
        <p>
          <input type="checkbox" name="" id="" />
          <span> A.</span> 6.下列叙述正确的是( )
        </p> <br>
        <p>
          <input type="checkbox" name="" id="" disabled />
          <span> A.</span> 6.下列叙述正确的是( )
        </p>
      </form> 
      <br>
      <p class="btns">
        <button disabled>上一题</button>
        <button disabled>下一题</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
.icons {
  width: 1rem;
  display: flex;
  justify-content: space-between;
}
.Physics {
  font-size: 0.2rem;
  border-bottom: 1px solid #999;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bigInt {
    font-size: 0.4rem;
    color: blue;
  }
}
.choose {
  font-size: 0.2rem;
  padding: 0.6rem;
  .choosSome{
      padding: 0.1rem 0.2rem;
      border-top-left-radius: 0.2rem;
      border-bottom-right-radius: 0.2rem;
      background: paleturquoise;
  }
  .bigOne{
      font-size: 0.36rem;
  }
  .btns{
      width: 100%;
      display: flex;
      justify-content: space-between;
      button{
          padding: 0.1rem 0.2rem;
      }
  }
}
</style>