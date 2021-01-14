import Vue from 'vue'
import VueRouter from 'vue-router'
import lixiang from './xiang/index.js'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children:[
      ...lixiang
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
