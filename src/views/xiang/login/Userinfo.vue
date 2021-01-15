<template>
  <div class="userinfo">
    <van-nav-bar title="信息填写" left-arrow @click-left="onClickLeft" />
    <div class="contents">
      <ul>
        <li class="border-bottom">
          <span>姓名</span>
          <p><span>请输入昵称</span><van-icon size="20" name="arrow" /></p>
        </li>
        <li class="border-bottom">
          <span>性别</span>
          <p @click="sex"><span>请选择性别</span><van-icon size="20" name="arrow" /></p>
        </li>
        <li class="border-bottom">
          <span>出生日期</span>
          <p>
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
          </p>
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
          <p @click="content = true">
            <span v-if="message.content==''">请选择学科</span>
            <span v-else>
                <span v-for="(item,index) in message.content" :key="index">{{item.name}}</span>
            </span>
            <van-icon size="20" name="arrow" />
          </p>
        </li>
      </ul>
    </div>
    <van-popup v-model="content" class="contentList">
      <p>学科选择</p>
      <ul>
        <li
          v-for="(item, index) in contentList"
          :key="index"
          @click="contentListClick(item)"
          :class="item.type==true?'bgColor':''"
        >
          {{ item.name }}
        </li>
      </ul>
      <button @click="ok">确认</button>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentList: [
        { 
            name: "语文",
            type:false
        },
        { 
            name: "数学",
            type:false
        },
        { 
            name: "英语",
            type:false
        },
        { 
            name: "物理",
            type:false
        },
        { 
            name: "化学",
            type:false
        },
        { 
            name: "生物",
            type:false
        },
        { 
            name: "政治",
            type:false
        },
        { 
            name: "历史",
            type:false
        },
        { 
            name: "地理",
            type:false
        },
      ],
      show: false,
      content: false,
      message: {
        date: null,
        content: [],
      },
      title: "请输入出生日期",
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(),
    };
  },
  mounted() {},
  methods: {
    //   回到上一页面
    onClickLeft() {
      this.$router.go(-1);
    },
    // 出生日期解析
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    // 点击确定，添加出生日期
    onConfirm(date) {
      this.show = false;
      this.title = "";
      this.message.date = this.formatDate(date);
    },
    // 选中学科背景变色
    contentListClick(item) {
        item.type = !item.type
        if(item.type==true){
        }
    },
    // 学科确认
    ok() {
        this.contentList.filter(item=>{
            if(item.type == true){
                this.message.content.push(item);
            }
        })
        this.content = false;
    },
    // 跳转性别路由
    sex() {
        this.$router.push({path:'/sex'})
    }
  },
};
</script>

<style lang="scss" scoped>
.userinfo {
  width: 100%;
  height: 100%;
  .contents {
    width: 100%;
    height: 100%;
    padding: 0 0.3rem;
    background-color: #fff;
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
          }
          i {
            color: #999;
          }
        }
      }
    }
  }
  .contentList {
    padding: 0 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
      font-size: 0.4rem;
      padding: 0.5rem 0;
    }
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        width: 30%;
        height: 0.7rem;
        font-size: 0.4rem;
        background-color: #eee;
        padding: 0.2rem 0;
        margin: 0.2rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bgColor{
          background-color: orangered;
          color: #fff;
      }
    }
    button {
      width: 2.3rem;
      height: 0.8rem;
      background-color: orangered;
      font-size: 0.26rem;
      margin: 0.5rem;
      border: none;
      color: #fff;
      border-radius: 0.1rem;
    }
  }
}
</style>
