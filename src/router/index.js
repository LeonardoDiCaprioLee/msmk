import Vue from 'vue'
import VueRouter from 'vue-router'
import lixiang from './xiang/index.js'
import whjRouter from "./whj_router"
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
      ...lixiang,
      ...whjRouter
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
