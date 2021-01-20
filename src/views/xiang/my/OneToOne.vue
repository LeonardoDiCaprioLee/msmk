<template>
    <div class='one_to_one'>
        <van-nav-bar title="一对一辅导" left-arrow @click-left="onClickLeft" />
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
