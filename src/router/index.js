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
<<<<<<< HEAD
    redirect: '/index',
    children: [
      ...jun
=======
    children : [
      ...whjRouter
>>>>>>> a0c29599bcf524672726aac86b1e42dbba6ccf50
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
