import Vue from 'vue'
import VueRouter from 'vue-router'
import Loading from "@/views/share/loading/index.vue"
import GetIcon from "@/views/share/get_icon/index.vue"
import MyExerciseHistory from "@/views/share/my_exercise_history/index.vue"
import ClassExerciseHistory from "@/views/share/class_exercise_history/index.vue"
import Statistics from "@/views/share/statistics/index.vue"
import Terms from "@/views/terms/detail-index.vue"
import TermsList from "@/views/terms/list-index.vue"
import Notice from "@/views/notice/index.vue"
import Questions from "@/views/questions/index.vue"
import NotFound from "@/views/not-found/index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/share/loading",
    name: "Loading",
    component: Loading,
  },
  {
    path: "/share/get-icon",
    name: "GetIcon",
    component: GetIcon,
  },
  {
    path: "/share/exercise/my-exercise-history",
    name: "MyExerciseHistory",
    component: MyExerciseHistory,
  },
  {
    path: "/share/exercise/class-exercise-history",
    name: "ClassExerciseHistory",
    component: ClassExerciseHistory,
  },
  {
    path: "/share/exercise/statistics",
    name: "Statistics",
    component: Statistics,
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
  },
  {
    path: "/terms/list",
    name: "TermsList",
    component: TermsList,
  },
  {
    path: "/notice",
    name: "Notice",
    component: Notice,
  },
  {
    path: "/questions",
    name: "Questions",
    component: Questions,
  },
  {
    path: "/*",
    name: "NotFound",
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router