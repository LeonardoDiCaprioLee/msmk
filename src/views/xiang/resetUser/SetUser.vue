<template>
  <div class="setUser">
    <van-nav-bar title="标题" left-arrow @click-left="onClickLeft" />
    <div class="contentUser">
      <ul>
        <li class="border-bottom">
          <span>头像</span>
          <p>
            <span><img :src="obj.avatar" alt=""/></span
            ><van-icon size="20" name="arrow" />
          </p>
        </li>
        <li class="border-bottom">
          <span>姓名</span>
          <p @click="resetnickname">
            <span>{{ obj.nickname }}</span
            ><van-icon size="20" name="arrow" />
          </p>
        </li>
        <li class="border-bottom">
          <span>手机号</span>
          <p>
            <span>{{ obj.mobile }}</span
            ><van-icon/>
          </p>
        </li>
        <li class="border-bottom">
          <span>性别</span>
          <p @click="sex(obj.sex)">
            <span>{{ obj.sex == 0 ? "男" : "女" }}</span
            ><van-icon size="20" name="arrow" />
          </p>
        </li>
        <li class="border-bottom">
          <span>出生日期</span>
          <p>
            <van-cell
              :title="obj.birthday"
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
          <p @click="showPopup"><span>{{obj.province_name}}-{{obj.city_name}}-{{obj.district_name}}</span><van-icon size="20" name="arrow" /></p>
        </li>
        <!-- <li class="border-bottom">
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
        </li> -->
      </ul>
    </div>
    <van-popup v-model="show2"
      position="bottom" >
      <van-area
        :area-list="areaList"
        @confirm="w"
        @cancel="cancel"
        :columns-placeholder="['请选择', '请选择', '请选择']"
    /></van-popup>
  </div>
</template>

<script>
import sj from "../../../assets/js/site";
import {Personal,ageDis,city,resetPersonal} from '@/utils/api/index'

export default {
  data() {
    return {
      obj: {},
      message: {
        date: null,
        content: [],
      },
      title: "请输入出生日期",
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(),
      show: false,
      show2: false,
      areaList: sj,
      time:{}
    };
  },
  mounted() {
    Personal().then(res=>{
      console.log(res);
      this.obj  = res
    })
    ageDis().then(res=>{
      // this.obj  = res
    })
    city().then(res=>{
      // this.obj  = res
    })
  },
  methods: {
    // 回到上一层
    onClickLeft() {
      this.$router.go(-1);
    },
    // 跳转修改性别路由
    sex() {
      this.$router.push({ path: "/sex",query:{readios:this.obj.sex}});
    },
    // 跳转修改姓名路由
    resetnickname(){
      this.$router.push({ path: "/resetNikename",query:{nicknames:this.obj.nickname}});
    },
    // 出生日期解析
    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    // 点击确定，添加出生日期
    onConfirm(date) {
      this.show = false;
      this.title = "";
      this.time = this.formatDate(date)
      // this.message.date = this.formatDate(date);
    },
    // 修改城市
    w(val) {
      resetPersonal({
          city_id: val[0].code,
          city_name: val[0].name,
          district_id: val[1].code,
          district_name: val[1].name,
          province_id: val[2].code,
          province_name: val[2].name
        }).then(res=>{
      })
      Personal().then(res=>{
        console.log(res);
        // this.obj  = res
      })
      // this.$router.go(0)
      this.show2 = false
    },
    // 显示隐藏城市
    showPopup() {
      this.show2 = true;
    },
    // 取消隐藏
    cancel() {
      this.show2 = false
    }
  },
};
</script>

<style lang="scss" scoped>
.setUser {
  width: 100%;
  height: 100%;
  .contentUser {
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
            img {
              width: 0.8rem;
              border-radius: 50%;
            }
          }
          i {
            width: 0.4rem;
            height: 0.4rem;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
