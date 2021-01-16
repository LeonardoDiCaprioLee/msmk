<template>
    <div class='setUser'>
        <van-nav-bar
        title="标题"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="contentUser">
            <ul>
                <li class="border-bottom">
                    <span>头像</span>
                    <p><span><img :src="obj.avatar" alt=""></span><van-icon size="20" name="arrow" /></p>
                </li>
                <li class="border-bottom">
                    <span>姓名</span>
                    <p><span>{{obj.nickname}}</span><van-icon size="20" name="arrow" /></p>
                </li>
                <li class="border-bottom">
                    <span>性别</span>
                    <p @click="sex"><span>请选择性别</span><van-icon size="20" name="arrow" /></p>
                </li>
                <li class="border-bottom">
                    <span>出生日期</span>
                    <!-- <p>
                        <van-cell
                        :title="title"
                        :value="message.date"
                        @click="show = true"
                        /><van-calendar
                        v-model="show"
                        @confirm="onConfirm"
                        :min-date="minDate"
                        :max-date="maxDate"
                        /><van-icon size="20" name="arrow" />
                    </p> -->
                </li>
                <li class="border-bottom">
                    <span>所在城市</span>
                    <p><span>请选择城市</span><van-icon size="20" name="arrow" /></p>
                </li>
                <li class="border-bottom">
                    <span>年级</span>
                    <p><span>请选择年级</span><van-icon size="20" name="arrow" /></p>
                </li>
                <li>
                    <span>学科</span>
                    <!-- <p @click="content = true">
                        <span v-if="message.content==''">请选择学科</span>
                        <span v-else>
                            <span v-for="(item,index) in message.content" :key="index">{{item.name}}</span>
                        </span>
                        <van-icon size="20" name="arrow" />
                    </p> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            obj:{}
        };
    },
    mounted() {
        this.obj = this.$route.query.user
        console.log(this.obj);
    },
    methods: {
        // 回到上一层
        onClickLeft() {
            this.$router.go(-1)
        },
        // 跳转性别路由
        sex() {
            this.$router.push({path:'/sex'})
        }
    },
};
</script>

<style lang='scss' scoped>
    .setUser{
        width: 100%;
        height: 100%;
        .contentUser{
            width: 100%;
            padding: 0 0.3rem;
            background-color: #fff;
            margin-top: 0.1rem;
            ul {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                li {
                    width: 100%;
                    height: 1.2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    > span {
                        font-size: 0.3rem;
                    }
                    p {
                    width: 50%;
                    height: 1.2rem;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                        span {
                            font-size: 0.26rem;
                            color: #999;
                            img{
                                width: 0.8rem;
                                border-radius: 50%;
                            }
                        }
                        i {
                            color: #999;
                        }
                    }
                }
            }
        }
    }
</style>
