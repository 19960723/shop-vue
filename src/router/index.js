import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes
})

//  路由守护
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken
  if (to.path === '/login' || to.path === '/register') {
    Vue.prototype.$bg_show = true
    next()
  } else {
    Vue.prototype.$bg_show = false
    isLogin ? next() : next('/login')
  }
})

export default router
