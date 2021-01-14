import Vue from 'vue'
import VueRouter from 'vue-router'
import whjRouter from "./whj_router"
Vue.use(VueRouter)
import jun from './jun'
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
      ...jun,
      ...whjRouter
 ]
  },

]

const router = new VueRouter({
  routes
})

export default router
