import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/icons',
    name: 'Icons',
    component: () => import('../views/Icons')
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('../views/Guide')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
