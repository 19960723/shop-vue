import axios from '@/http'
// 获取服务器数据

class ServerData {
  cityGuess () {
    // 获取首页默认地址
    return axios.get('/v1/cities', { params: { type: 'guess' } })
  }

  groupcity () {
    // 获取首页所有城市
    return axios.get('/v1/cities', { params: { type: 'group' } })
  }

  currentcity (number) {
    // 获取当前所在城市
    return axios.get('/v1/cities/' + number)
  }

  msiteFoodTypes (geohash) {
    // 获取msite页面食品分类列表
    return axios.get('/v2/index_entry', { params: { geohash, group_type: '1', 'flags[]': 'F' } })
  }

  shopList (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', deliveryMode = '', support_ids = []) {
    let supportStr = ''
    support_ids.forEach(item => {
      if (item.status) {
        supportStr += '&support_ids[]=' + item.id
      }
    })
    const data = {
      latitude,
      longitude,
      offset,
      limit: '20',
      'extras[]': 'activities',
      keyword: '',
      restaurant_category_id,
      'restaurant_category_ids[]': restaurant_category_ids,
      order_by,
      'delivery_mode[]': deliveryMode + supportStr
    }
    return axios.get('/shopping/restaurants', { params: data })
  }
}

export default new ServerData()
