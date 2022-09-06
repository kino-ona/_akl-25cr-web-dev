import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const strict = false

export default new Vuex.Store({
  state: {
    mainData: null
  },
  mutations: {
    SETDATA (state, mainData) {
      state.mainData = mainData;
    }
  },
  actions: {
  },
  modules: {
  }
})
