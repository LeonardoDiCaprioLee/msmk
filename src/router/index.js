import Vue from 'vue'
import VueRouter from 'vue-router'
import lixiang from './xiang/index.js'
import whjRouter from "./whj_router"
Vue.use(VueRouter)
import jun from './jun'
import jun1 from './jun1'
const routes = [
  {
    path: '/',
    redirect: '/home'
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
    ],
   
  },
  // 外部路由
 ...jun1
  // 外部路由

]
const router = new VueRouter({
    routes
  })

export default router
