import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './modules/user-store'
import cityStore from './modules/city-store'
import socketStore from './modules/socket-store.js'
import bookingStore from './modules/booking-store'
import reviewStore from './modules/review-store'
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
    socketStore,
    bookingStore,
    reviewStore
  }
})
