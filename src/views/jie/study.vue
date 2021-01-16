<template>
    <div>
        <van-nav-bar
  title="我的学习卡"
  right-text="学习卡兑换"
  left-arrow
  @click-left="$router.go(-1)"
  @click-right="$router.push('/exchange')"
/>
    <span style="font-size:0.2rem;">暂无记录</span>
    </div>
</template>

<script>
export default {
    data(){
        return {

        } 
    },
    methods : {},
    computed : {},
    filters : {},
    components : {},
    directives : {},
    mounted(){}
}
</script>

<style scoped>

</style>