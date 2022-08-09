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
    component: () => import('@/views/share/class_exercise_history/record-share01.vue')
  },
  {
    path: '/record-share',
    name: 'record-share',
    component: () => import('@/views/share/class_exercise_history/record-share02.vue')
  },
  {
    path: '/share-template',
    name: 'share-template',
    component: () => import('@/views/share/get_icon/share-template.vue')
  },
  {
    path: '/exercise-share',
    name: 'exercise-share',
    component: () => import('@/views/share/my_exercise_history/exercise-share.vue')
  },
  {
    path: '/exercise-stats',
    name: 'exercise-stats',
    component: () => import('@/views/share/statistics/exercise-stats.vue')
  },
    
  // 내가 만든 페이지
  {
    path: "/share/loading",
    name: "Loading",
    component: () => import("@/views/share/loading/index.vue"),
  },
  {
    path: "/share/get-icon",
    name: "GetIcon",
    component: () => import("@/views/share/get_icon/index.vue"),
  },
  {
    path: "/share/exercise/my-exercise-history",
    name: "MyExerciseHistory",
    component: () => import("@/views/share/my_exercise_history/index.vue"),
  },
  {
    path: "/share/exercise/class-exercise-history",
    name: "ClassExerciseHistory",
    component: () => import("@/views/share/class_exercise_history/index.vue"),
  },
  {
    path: "/share/exercise/statistics",
    name: "Statistics",
    component: () => import("@/views/share/statistics/index.vue"),
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import("@/views/terms/index.vue"),
  },
  {
    path: "/notice",
    name: "Notice",
    component: () => import("@/views/notice/index.vue"),
  },
  {
    path: "/questions",
    name: "Questions",
    component: () => import("@/views/questions/index.vue"),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router