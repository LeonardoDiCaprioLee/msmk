<template>
    <div class="curriculum">
        <!-- 头部组件 -->
        <currHead></currHead>
        <!-- 下拉组件 -->
        <currSelect></currSelect>
        <!-- 内容组件 -->
        <currMain></currMain>
    </div>
</template>

<script>
// 引入头部组件
import currHead from "./curr_head"
// 引入下拉组件
import currSelect from "./curr_select"
// 引入内容组件
import currMain from "./curr_main"
export default {
    data(){
        return {
        } 
    },
    methods : {},
    computed : {},
    filters : {},
    components : {
        currHead,
        currSelect,
        currMain
    },
    directives : {},
    mounted(){}
}
</script>

<style lang="scss" scoped>
.curriculum{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // 头部组件样式
    .currHead{
        width: 100%;
    }

    // 下路组件样式
    .currSelect{
        width: 100%;
    }

    // 内容区域样式
    .currMain{
        flex: 1;
        background: #ededed;
    }
}
</style>