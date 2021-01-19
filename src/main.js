import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import "./assets/css/common.css"
import './assets/js/rem.js'
import './assets/css/jun.scss'


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
Vue.prototype.$axios = axios

import VueQriously from 'vue-qriously'
Vue.use(VueQriously)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
