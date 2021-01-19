<template>
    <div class='ResetNikename'>
        <p><input type="text" v-model="userName"></p>
        <div>
            <button @click="okUsername">保存</button>
        </div>
    </div>
</template>

<script>
import {resetPersonal} from '@/utils/api/index'
export default {
    data() {
        return {
            userName:''
        };
    },
    mounted() {
        this.userName = this.$route.query.nicknames
    },
    methods: {
        okUsername() {
            resetPersonal({nickname:this.userName}).then(res=>{
                this.$router.push({path:'/setUser'})
            })
        }
    },
};
</script>

<style lang='scss' scoped>
    .ResetNikename{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        p,div{
            width: 100%;
            height: 1rem;
            padding: 0 0.3rem;
            background-color: #fff;
            display: flex;
            align-items: center;
            button,input{
                width: 100%;
                height: 100%;
                outline: none;
                border:none;
            }
            input{
                font-size: 0.26rem;
            }
        }
        div{
            position: absolute;
            bottom: 0;
            button{
                height: 0.74rem;
                border-radius: 0.5rem;
                background-color: #e60012;
                font-size: 0.26rem;
                color: #fff;
            }
        }
    }
</style>
