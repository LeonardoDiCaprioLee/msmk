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
    // 分类数据筛选
    chooseGrades(state, arr) {
      state.chooseGrades = arr;
      console.log(state.chooseGrades)
    },
    setUser(state,i){
      state.user = i
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    persist()
  ]
})
