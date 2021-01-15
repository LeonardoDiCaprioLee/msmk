<template>
  <div class="discount">
    <van-nav-bar title="我的优惠券" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" @click="classify">
        <van-tab title="全部"></van-tab>
        <van-tab title="已使用"></van-tab>
        <van-tab title="未使用"></van-tab>
        <van-tab title="已过期"></van-tab>
    </van-tabs>
    <ul>
        <li v-for="item in list" :key="item.id">
            <ol>
                <li>￥<span>{{item.price}}</span></li>
                <li>
                    <span>{{item.type}}</span>
                    <span>{{item.restrict}}</span>
                    <span>{{item.startTime}}--{{item.endTime}}</span>
                </li>
                <li>
                    <button>立即使用</button>
                </li>
            </ol>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        active:0,
        discount:[
            {
                price:50,
                type:'现金类',
                restrict:'初三英语',
                startTime:new Date().toLocaleDateString(),
                endTime:new Date('2022-1-1 00:00:00').toLocaleDateString(),
                cid:1,
                id:1
            },{
                price:50,
                type:'现金类',
                restrict:'高三语文',
                startTime:new Date().toLocaleDateString(),
                endTime:new Date('2022-1-1 00:00:00').toLocaleDateString(),
                cid:3,
                id:2
            },{
                price:50,
                type:'现金类',
                restrict:'初三数学',
                startTime:new Date().toLocaleDateString(),
                endTime:new Date('2022-1-1 00:00:00').toLocaleDateString(),
                cid:1,
                id:3
            },{
                price:50,
                type:'现金类',
                restrict:'初三历史',
                startTime:new Date().toLocaleDateString(),
                endTime:new Date('2022-1-1 00:00:00').toLocaleDateString(),
                cid:2,
                id:4
            },{
                price:50,
                type:'现金类',
                restrict:'初二英语',
                startTime:new Date().toLocaleDateString(),
                endTime:new Date('2022-1-1 00:00:00').toLocaleDateString(),
                cid:1,
                id:5
            },{
                price:50,
                type:'现金类',
                restrict:'高二英语',
                startTime:new Date().toLocaleDateString(),
                endTime:new Date('2022-1-1 00:00:00').toLocaleDateString(),
                cid:3,
                id:6
            },{
                price:50,
                type:'现金类',
                restrict:'高一数学',
                startTime:new Date().toLocaleDateString(),
                endTime:new Date('2022-1-1 00:00:00').toLocaleDateString(),
                cid:2,
                id:7
            },{
                price:50,
                type:'现金类',
                restrict:'初三英语',
                startTime:new Date().toLocaleDateString(),
                endTime:new Date('2022-1-1 00:00:00').toLocaleDateString(),
                cid:2,
                id:8
            },
        ],
        list:[]
    };
  },
  mounted() {
      this.classify()
  },
  methods: {
    //   返回上一层
    onClickLeft(){
        this.$router.go(-1)
    },
    //   登录
    classify(){
        if(this.active == 0){
            this.list = this.discount
        } else {
              this.list = this.discount.filter(item=>{
                  return item.cid == this.active
              })
        }
    },

  },
};
</script>

<style lang="scss" scoped>
.discount {
    width: 100%;
    height: 100%;
    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        padding: 0 0.3rem;
        >li{
            width: 100%;
            height: 2rem;
            margin: 0.2rem 0;
            background-color: #fff;
            border-radius: 0.1rem;
            ol{
                width: 100%;
                height: 2rem;
                display: flex;
                li:nth-child(1){
                    width: 30%;
                    line-height: 2rem;
                    font-size: 0.26rem;
                    color: orangered;
                    text-align: center;
                    span{
                        font-size: 0.8rem;
                    }
                }
                li:nth-child(2){
                    width: 40%;
                    font-size: 0.26rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    span{
                        margin: 0.1rem 0;
                    }
                    span:nth-child(1){
                        font-size: 0.34rem;
                        font-weight: bold;
                    }
                    span:nth-child(2),span:nth-child(3){
                        color: #999;
                    }
                }
                li:nth-child(3){
                    width: 30%;
                    button{
                        border: none;
                        width: 100%;
                        height: 100%;
                        font-size: 0.3rem;
                        background-color: rgba(255, 68, 0, 0.781);
                        border-radius: 0.2rem;
                        color: #fff;
                    }
                }
            }
        }
  }
}
</style>
