import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'  //정적으로 불러옴

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/Help.vue')
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('@/views/Counter.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')  //동적으로 선언
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
