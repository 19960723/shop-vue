import Index from '../view/Index/Index.vue'
import Login from '../view/Login/Login.vue'
import Register from '../view/Register/Register'
import Msite from '../view/Msite/Msite.vue'
import Life from '../view/Life/Life.vue'
import Order from '../view/Order/Order.vue'
import Mine from '../view/Mine/Mine.vue'
import Search from '../view/Search/Search.vue'
import Shop from '../view/Shop/Shop.vue'
import Food from '../view/Food/Food.vue'

export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/index',
    component: Index,
    children: [
      {
        path: '/',
        component: Msite
      },
      {
        path: '/life',
        name: 'life',
        component: Life
      },
      {
        path: '/order',
        name: 'order',
        component: Order
      },
      {
        path: '/mine',
        name: 'mine',
        component: Mine
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/food',
    name: 'food',
    component: Food
  }
]
