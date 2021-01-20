<template>
    <div class='one_to_one'>
        <van-nav-bar title="剩余学习币" left-arrow @click-left="onClickLeft" />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        }
    },
};
</script>

<style lang='scss'>

</style>
