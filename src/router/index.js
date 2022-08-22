import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/record-share-light',
    name: 'record-share-light',
    component: () => import('@/views/record-share01.vue')
  },
  {
    path: '/record-share',
    name: 'record-share',
    component: () => import('@/views/record-share02.vue')
  },
  {
    path: '/share-template',
    name: 'share-template',
    component: () => import('@/views/share-template.vue')
  },
  {
    path: '/exercise-share',
    name: 'exercise-share',
    component: () => import('@/views/exercise-share.vue')
  },
  {
    path: '/exercise-stats',
    name: 'exercise-stats',
    component: () => import('@/views/exercise-stats.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/faq.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
