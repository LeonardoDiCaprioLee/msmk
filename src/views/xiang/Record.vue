<template>
  <div class="record">
    <van-nav-bar title="约课记录" />
    <div class="cards">
      <van-tabs v-model="active">
        <van-tab title="待上课">
          <van-card
            num="2"
            price="2.00"
            desc="璐璐老师在线放屁"
            title="待上课内容"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            v-for="(item, index) in 8"
            :key="index"
          />
        </van-tab>
        <van-tab title="已上课">
           <van-card
            num="2"
            price="2.00"
            desc="学习之前请带好自己的闪现，闪电五连鞭及其凶悍,切勿草率学习"
            title="听张高俊老师给你来个闪电五连鞭"
            thumb="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-1646791184-E745CAFDF1A0526DFED0ED3C9D487F43%2F0%3Ffmt%3Djpg%26size%3D131%26h%3D822%26w%3D900%26ppv%3D1&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613286705&t=2c9ae6af52c77e7f39130bef86a8a8f9"
            v-for="(item, index) in 8"
            :key="index"
          />
        </van-tab>
        <van-tab title="已取消">
          <van-card
            num="2"
            price="2.00"
            desc="自由搏击对抗闪电五连鞭,究竟鹿死谁手"
            title="泰森亲传弟子李想"
            thumb="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10115%2F70%2Fw1080h1390%2F20200301%2Fe5fc-iqfqmat0267560.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613286831&t=50c1f8ac52675bb0373bb5606b6449c0"
            v-for="(item, index) in 8"
            :key="index"
          />
        </van-tab>
      </van-tabs>
    </div>

    <div v-if="$store.state.token == ''" class="main">
      <button @click="$router.push('/login')">登录/注册</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.record {
  width: 100%;
  height: 100%;
}
.cards {
  padding-bottom: 1.5rem;
}
.van-card {
  margin-top: 0.5rem;
}
.main {
  width: 100%;
  height: 200rem;
  button {
    width: 2rem;
    height: 0.6rem;
    color: white;
    font-size: 0.2rem;
    border-radius: 0.05rem;
    border: none;
    background: orange;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
