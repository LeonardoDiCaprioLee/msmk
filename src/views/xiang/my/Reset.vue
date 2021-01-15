<template>
    <div class='reset'>
        <van-nav-bar
            title="设置"
            left-arrow
            @click-left="onClickLeft"
            />
        <div class="out">
            <button @click="out">退出登录</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {
        onClickLeft(){
            // 回到上一层
            this.$router.go(-1)
        },
        out(){
            // 退出登录，清空token
            this.$store.commit('out')
            // 跳转登录页
            this.$router.push({path:'/login'})
        }
    },
};
</script>

<style lang='scss' scoped>
.reset{
    width: 100%;
    height:100%;
    .out{
        width: 70%;
        margin: 1rem auto 0;
        button{
            width: 100%;
            height: 1rem;
            background-color: blue;
            color: #fff;
            border-radius: 0.1rem;
            border: none;
            font-size: 0.4rem;
        }
    }
}
</style>
