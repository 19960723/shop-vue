<template>
  <div>
    <div class="msite_container">
      <router-link to="/search">
        <head-top class="header" :isTitle="isTitle" :headType="'link_search'"></head-top>
      </router-link>
      <swiper ref="mySwiper" class="swiperContainer" :options="swiperOption" >
        <swiper-slide v-for="(item, index) in foodList" :key="index">
          <ul class="list">
            <router-link :to="{path: '/food', query: {title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link)}}" class="item"  v-for="foodItem in item" :key="foodItem.title" >
              <img :src="imgBaseUrl + foodItem.image_url" alt="">
              <span>{{foodItem.title}}</span>
            </router-link>
          </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="shop_list">
        <header class="shop_header">
          <span class="iconfont icon">&#xe7f4;</span>
          <span>附近商家</span>
        </header>
        <shop-list></shop-list>
      </div>
    </div>
  </div>
</template>

<script>
import headTop from '../../components/header/head'
import shopList from '../../components/common/shoplist'
import getData from '../../service/getData'
export default {
  data () {
    return {
      isTitle: false,
      foodList: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: 3000,
        speed: 400,
        loop: true
      },
      getAccess: '',
      imgBaseUrl: 'https://fuss10.elemecdn.com'
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    getData.msiteFoodTypes('31.22299,121.36025')
      .then(res => {
        const resLength = res.data.length
        const resArr = [...res.data]
        const foodArr = []
        for (let i = 0, j = 0; i < resLength; i += 8, j++) {
          foodArr[j] = resArr.splice(0, 8)
        }
        this.foodList = foodArr
      }).then(() => {
      })
  },
  created () {

  },
  methods: {
    getCategoryId (url) {
      // 解码url地址，求去restaurant_category_id值
      const urlData = decodeURIComponent(url.split('=')[1].replace('&target_name', ''))
      if (/restaurant_category_id/gi.test(urlData)) {
        return JSON.parse(urlData).restaurant_category_id.id
      } else {
        return ''
      }
    }
  },
  components: {
    shopList,
    headTop
  }
}
</script>

<style lang="scss" scoped>
.msite_container{
  padding-top: 0.46rem;
}
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.swiperContainer{
  width: 100%;
  font-size: 0.12rem;
  background-color: #fff;
  height: 1.8rem;
  border-bottom: 0.5px solid #e4e4e4;
  margin-bottom: 0.08rem;
  img{
    width: 100%;
  }
  .list{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    text-align: center;
    .item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.1rem 0;
      img{
        width: 0.36rem;
        height: 0.36rem;
        margin-bottom: 0.08rem;
      }
      span{
        color: #666;
        font-size: 0.11rem;
      }
    }
  }
}
.shop_list{
  border-top: 0.5px solid #e4e4e4;
  background-color: #fff;
  .shop_header{
    display: flex;
    padding: 0.08rem 0 0 0.08rem;
    span{
      color: #999;
      font-size: 0.12rem;
      &.icon{
        padding: 0 0.06rem 0 0.02rem;
        font-size: 0.16rem;
      }
    }
  }
}
</style>
