import Vue from 'vue'
import Vuex from 'vuex'

import persist from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
  },
  mutations: {
    login(state,user){
        // 登录token存储
        state.token = user
    },
    out(state){ // 退出登录
      state.token = ''
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
