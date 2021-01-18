import Vue from 'vue'
import Vuex from 'vuex'

import persist from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 分类数据筛选
    chooseGrades: [],
    user:{},
    mobile_nikename:{}
  },
  mutations: {
    out(state) { // 退出登录
      localStorage.setItem('token', '')
    },
    // 分类数据筛选
    chooseGrades(state, arr) {
      state.chooseGrades = arr;
      console.log(state.chooseGrades)
    },
    setUser(state,i){
      state.user = i
    },
    set_teacher(state, v) {
      // console.log(v)
      state.teach.push(v)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    persist()
  ]
})
