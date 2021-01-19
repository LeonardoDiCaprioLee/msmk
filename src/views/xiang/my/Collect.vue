<template>
    <div class='collect'>
        <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft"/>
        <ul>
            <li class="border-bottom">
                <p><img src="" alt=""></p>
                <div>
                    <div>
                        <p class="title"><span>券</span><span>如何成为旅游体验师</span></p>
                        <p class="gray">845人已报名</p>
                    </div>
                    <p class="red">￥1998.0</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {Collect} from '@/utils/api/index'
export default {
    data() {
        return {};
    },
    mounted() {
        Collect().then(res=>{
            console.log(res);
        })
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        }
    },
};
</script>

<style lang='scss' scoped>
    .collect{
        width: 100%;
        height: calc(100% - 1rem);
        background-color: #fff;
        ul{
            width: 100%;
            padding: 0 0.3rem;
            li{
                width: 100%;
                height: 2rem;
                display: flex;
                padding: 0.3rem 0;
                >p{
                    width: 30%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                >div{
                    width: 70%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding-left: 0.2rem;
                    div{
                        width: 100%;
                        height: 60%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        .title{
                            font-size: 0.32rem;
                            font-weight: bold;
                            span:nth-child(1){
                                padding: 0.03rem 0.05rem;
                                border: 1px solid orangered;
                                color: orangered;
                                border-radius: 0.05rem;
                                margin-right: 0.1rem;
                            }
                        }
                        .gray{
                            font-size: 0.26rem;
                            color: #999;
                        }
                    }
                    p{
                        width: 100%;
                    }
                    .red{
                        font-size: 0.3rem;
                        color: red;
                    }
                }
            }
        }
    }
</style>
