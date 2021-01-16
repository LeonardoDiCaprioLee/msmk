<template>
    <div class='binding_number'>
        <div>
            <div class="one">
                <van-icon name="friends-o" size="30"/>
                <p class="border-bottom">
                    <input type="text" v-model="tel" placeholder="请输入手机号">
                    <button @click="test" v-if="show == true">获取验证码</button>
                    <button v-else class="gray">{{outTime}}s</button>
                </p>
            </div>
            <div class="tow">
                <van-icon name="friends-o"  size="30"/>
                <p class="border-bottom">
                    <input type="text" v-model="passTest" placeholder="请输入验证码">
                </p>
            </div>
            <div class="log_btn">
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {},
};
</script>

<style lang='scss' scoped>
    .binding_number{
        width: 100%;
        height: 100%;
    }
</style>
