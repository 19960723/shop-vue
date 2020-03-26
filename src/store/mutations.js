import { SET_AUTHENTICATED, SET_USER } from './mutations-type'

export default {
  [SET_AUTHENTICATED] (state, isAuthenticated) {
    if (isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    } else {
      state.isAuthenticated = false
    }
  },
  [SET_USER] (state, user) {
    if (user) {
      state.user = user
    } else {
      state.user = null
    }
  }
}
