import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
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