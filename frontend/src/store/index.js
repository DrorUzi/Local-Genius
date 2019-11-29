import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './modules/user-store'
import cityStore from './modules/city-store'
import msgStore from './modules/msg-store'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userStore,
    cityStore,
    msgStore,
  }
})
