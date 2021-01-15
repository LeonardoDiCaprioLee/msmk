import Vue from 'vue'
import Vuex from 'vuex'

import persist from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
    // 分类数据筛选
    chooseGrades : [],
  },
  mutations: {
    // 分类数据筛选
    chooseGrades(state,arr){
      state.chooseGrades = arr;
      console.log(state.chooseGrades)
=======
    token:'',
  },
  mutations: {
    login(state,user){
        state.token = user
>>>>>>> f7c2654cb17e5dece8844f983ac06e74c098cdb3
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[
    persist()
  ]
})
