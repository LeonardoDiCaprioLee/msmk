import Vue from 'vue'
import VueRouter from 'vue-router'
import lixiang from './xiang/index.js'
import whjRouter from "./whj_router"
Vue.use(VueRouter)
import jun from './jun'
const routes = [
  {
    path: '/',
    redirect: '/home'
<<<<<<< HEAD
  },
  {
    path: "/details",
    name: "Details",
    component: () => import("../views/jie/details")
=======
>>>>>>> e132c30f1bb55a3b6d5d92d2218d7dff352a041f
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect: '/index',
    children: [
      ...lixiang,
      ...whjRouter,
      ...jun,
    ]
  },


]
const router = new VueRouter({
    routes
  })

export default router
