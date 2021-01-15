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
        state.token = user
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
