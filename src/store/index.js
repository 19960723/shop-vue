import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  // 是否授权
  isAuthenticated: false,
  userInfo: '',
  geohash: '31.22299,121.36025' // 地址geohash值
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
