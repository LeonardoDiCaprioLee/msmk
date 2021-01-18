<template>
    <div class='sex'>
        <van-nav-bar title="性别修改" left-arrow right-text="保存" @click-left="onClickLeft" @click-right="onClickRight"/>
        <van-radio-group v-model="radio">
            <van-cell-group>
                <van-cell title="男" clickable @click="radio = '0'">
                <template #right-icon>
                    <van-radio name="0" />
                </template>
                </van-cell>
                <van-cell title="女" clickable @click="radio = '1'">
                <template #right-icon>
                    <van-radio name="1" />
                </template>
                </van-cell>
            </van-cell-group>
        </van-radio-group>
    </div>
</template>

<script>
import {resetPersonal} from '@/utils/api/index'
export default {
    data() {
        return {
            radio:0
        };
    },
    mounted() {
        this.radio = this.$route.query.readios
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        // 保存性别修改
        onClickRight() {
            resetPersonal({sex:this.radio}).then(res=>{
                this.$router.push({path:'/setUser'})
            })
        }
    },
};
</script>

<style lang='scss'>

</style>
