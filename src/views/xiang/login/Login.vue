<template>
    <div class='login'>
        <p class="header"><van-icon name="arrow-left" size="20" @click="$router.go(-1)"/></p>
        <div class="content">
            <img src="@/assets/images/login-img/logo.png" alt="">
            <div class="one">
                <van-icon name="friends-o" size="30"/>
                <p class="border-bottom">
                    <input type="text" v-model="user" placeholder="请输入账号">
                    <!-- <button>获取验证码</button> -->
                </p>
            </div>
            <div class="tow">
                <van-icon name="friends-o"  size="30"/>
                <p class="border-bottom">
                    <input type="text" v-model="pass" placeholder="请输入密码">
                </p>
            </div>
            <div class="log_btn">
                <button @click="login">登录</button>
            </div>
            <div class="back">
                <span>找回密码</span>
                <span>注册/ 验证码登录</span>
            </div>
            <div class="or">
                <span class="border-bottom wid"></span>
                <span>或以下方式登录</span>
                <span class="border-bottom wid"></span>
            </div>
            <ul>
                <li>
                    <button>
                    <div></div>
                    <img src="@/assets/images/login-img/weixin.jpg" alt=""></button>
                    <span>微信登录</span>
                </li>
                <li>
                    <button>
                    <div></div>
                    <img src="@/assets/images/login-img/QQ.jpg" alt=""></button>
                    <span>QQ登录</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user:'',
            pass:''
        };
    },
    mounted() {},
    methods: {
        login() {
            if(this.user != '' && this.pass != ''){
                this.$store.commit('login',this.user)
                this.$router.push({path:'/index'})
            } else {
                this.$toast.fail('账号密码不能为空');
            }
        }
    },
};
</script>

<style lang='scss' scoped>
    .login{
        width: 100%;
        height: 100%;
        background-color: #fff;
        .header{
            width: 100%;
            height: 1rem;
            display: flex;
            align-items: center;
            i{
                margin-left: 0.3rem;
            }
        }
        .content{
            width: 100%;
            height: 100%;
            padding: 0 0.8rem;
            text-align: center;
            >img{
                width: 80%;
                margin-top: 1rem;
            }
            >div{
                width: 100%;
                height: 1rem;
                display: flex;
                align-items: center;
                i{
                    color: orangered;
                }
                p{
                    width: 100%;
                    display: flex;
                    height: 1rem;
                    align-items: center;
                    justify-content: space-between;
                    input{
                        width: 3rem;
                        outline: none;
                        font-size: 0.3rem;
                        border: none;
                    }
                    button{
                        width: 2rem;
                        height: 0.6rem;
                        font-size: 0.28rem;
                        outline: none;
                        border: none;
                        background-color: orangered;
                        border-radius: 0.1rem;
                        color: #fff;
                    }
                }
            }
            .one{
                margin-top: 0.5rem;
            }
            .tow{
                margin-top: 0.3rem;
            }
            .log_btn{
                width: 100%;
                height: 1rem;
                margin-top: 1rem;
                button{
                    width: 100%;
                    height: 1rem;
                    background-color: orangered;
                    font-size: 0.4rem;
                    color: #fff;
                    outline: none;
                    border: none;
                    border-radius: 0.1rem;
                }
            }
            .back{
                width: 100%;
                height: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span{
                    color: #999;
                    font-size: 0.24rem;
                }
            }
            .or{
                width: 100%;
                height: 1rem;
                display: flex;
                justify-content: space-between;
                margin-top: 0.5rem;
                span{
                    font-size: 0.26rem;
                    color: #999;
                }
                .wid{
                    width: 30%;
                }
            }
            ul{
                width: 100%;
                height: 1.5rem;
                display: flex;
                justify-content: center;
                margin-top: 0.3rem;
                li{
                    height: 1.5rem;
                    margin: 0 0.5rem;
                    font-size: 0.26rem;
                    color: #999;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    button{
                        width: 1rem;
                        height: 1rem;
                        border: 1px solid rgb(228, 228, 228);
                        border-radius: 50%;
                        background-color: #fff;
                        img{
                            width: 60%;
                            height: 60%;
                            opacity: 0.3;
                        }

                    }
                }
            }
        }
    }
</style>
