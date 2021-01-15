import Vue from 'vue'
import Vuex from 'vuex'

import persist from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 分类数据筛选
    chooseGrades: [],
    token: '',
  },
  mutations: {
    // 分类数据筛选
    chooseGrades(state, arr) {
      state.chooseGrades = arr;
      console.log(state.chooseGrades)
    },
    mutations: {
      login(state, user) {
        state.token = user
      }
    },
    actions: {
    },
    modules: {
    },
    plugins: [
      persist()
    ]
  }
})
