<template>
    <div class='feedback'>
        <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft"/>
        <van-field
            v-model="message"
            rows="2"
            size="50"
            type="textarea"
            maxlength="500"
            placeholder="请输入留言"
            show-word-limit
            class="height"
            />
            <div class="btn"><button>提交</button></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message:''
        };
    },
    mounted() {},
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
    },
};
</script>

<style lang='scss' scoped>
    .feedback{
        width: 100%;
        height: 100%;
        background-color: #fff;
        .btn{
            width: 100%;
            height: 5rem;
            padding: 0 0.3rem;
            display: flex;
            align-items: center;
            button{
                width: 100%;
                height: 0.86rem;
                background-color: #e60012;
                border-radius: 0.1rem;
                font-size: 0.35rem;
                color: #fff;
                border: none;
            }
        }
    }
</style>
