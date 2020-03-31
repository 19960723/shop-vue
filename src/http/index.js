import axios from 'axios'
import router from '../router'

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin()
      break
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      localStorage.removeItem('eleToken')
      setTimeout(() => {
        toLogin()
      }, 1000)
      break
    // 404请求不存在
    case 404:
      break
    default:
  }
}

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'https://elm.cangdu.org'
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://elm.cangdu.org'
}

// 设置请求超时
axios.defaults.timeout = 10000

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 设置统一的请求header
    if (localStorage.eleToken) config.headers.Authorization = localStorage.eleToken
    return config
  },
  error => Promise.reject(error)
)

// 响应拦截
axios.interceptors.response.use(
  // 请求成功
  response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
  // 请求失败
  error => {
    // 获取错误状态码
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
    }
  }
)

export default axios
