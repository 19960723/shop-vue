import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils/common/rem'
import axios from 'axios'
import MintUI from './MintUI'
import 'mint-ui/lib/style.css'
import Vuelidate from 'vuelidate'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

utils.rem()
Vue.use(MintUI)
Vue.use(Vuelidate)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
