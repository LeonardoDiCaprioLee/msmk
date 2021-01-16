<template>
    <div class='sex'>
        <van-nav-bar title="性别修改" left-arrow right-text="保存" @click-left="onClickLeft" @click-right="onClickRight"/>

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
            this.$router.go(-1)
        },
        onClickRight() {
            
        }
    },
};
</script>

<style lang='scss'>

</style>
