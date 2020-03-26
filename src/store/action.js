import { SET_AUTHENTICATED, SET_USER } from './mutations-type'

export default {
  async setAuthenticated ({ commit }, isAuthenticated) {
    commit(SET_AUTHENTICATED, isAuthenticated)
  },
  async setUser ({ commit }, user) {
    commit(SET_USER, user)
  }
}
