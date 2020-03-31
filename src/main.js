import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils/common/rem'
import axios from './http'
import MintUI from './MintUI'
import 'mint-ui/lib/style.css'
import Vuelidate from 'vuelidate'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import VueScrollLock from 'vue-scroll-lock' // 子組件滚动条冲突

utils.rem()
Vue.use(MintUI)
Vue.use(Vuelidate)
Vue.use(VueAwesomeSwiper)
Vue.use(VueScrollLock)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
