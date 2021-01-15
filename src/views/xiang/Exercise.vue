<template>
  <div class="exercise">
    <van-nav-bar title="练习" />
    <div class="sex">
      <ul>
        <li  @click="$router.push('/site')">
          <div>
            <img src="../../assets/images/exercise-img/1-1.png" alt />
          </div>
          <p>考点专练</p>
        </li>
        <li @click="$router.push('/rollUp')">
          <div>
            <img src="../../assets/images/exercise-img/1-2.png" alt />
          </div>
          <p>考卷练习</p>
        </li>
        <li @click="$router.push('/simulation')">
          <div>
            <img src="../../assets/images/exercise-img/1-3.png" alt />
          </div>
          <p>仿真模拟</p>
        </li>
        <li @click="$router.push('/Wrong')">
          <div>
            <img src="../../assets/images/exercise-img/1-4.png" alt />
          </div>
          <p>错题练习</p>
        </li>
        <li @click="$router.push('/Evaluation')">
          <div>
            <img src="../../assets/images/exercise-img/1-5.png" alt />
          </div>
          <p>测评记录</p>
        </li>
        <li @click="$router.push('/Collection')">
          <div>
            <img src="../../assets/images/exercise-img/1-6.png" alt />
          </div>
          <p>习题收藏</p>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      arrows: ""
    };
  },
  mounted() {},
  methods: {
    show1() {
      this.show = true;
      this.arrows = false;
    },
    show2() {
      this.show = false;
      if (this.arrows == "") {
        return (this.arrows = true);
      } else {
        this.arrows = !this.arrows;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.exercise {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  .van-nav-bar__title {
    font-size: 0.36rem;
  }
  .sex {
    width: 100%;
    ul {
      width: 7.1rem;
      height: 100%;
      background-color: #fff;
      border-radius: 0.1rem;
      display: flex;
      flex-wrap: wrap;
      margin: 0.2rem;
      padding: 0.1rem 0;
      li {
        width: 25%;
        height: 1.68rem;
        padding-top: 0.2rem;
        div {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          box-shadow: 0 0 15px -10px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0.48rem;
          img {
            width: 0.32rem;
          }
        }
        p {
          width: 100%;
          height: 0.68rem;
          font-size: 0.24rem;
          text-align: center;
          line-height: 0.68rem;
          color: #595959;
        }
      }
    }
  }
  .content {
    width: 100%;
    background-color: #fff;
    padding: 0.3rem;
    .one {
      width: 100%;
      font-size: 0.3rem;
      margin-bottom: 0.29rem;
      color: #8c8c8c;
    }
    .tow {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.45rem;
      font-size: 0.26rem;
      .time {
        margin-right: 0.1rem;
      }
    }
    .color {
      color: #eb6100;
    }
    .no {
      width: 100%;
      height: 2.92rem;
      text-align: center;
      img {
        width: 1.76rem;
        margin-bottom: 0.3rem;
      }
      p {
        width: 100%;
        font-size: 0.24rem;
        color: #8c8c8c;
        text-align: center;
      }
    }
  }
}
</style>
