<template>
  <div>
    <div class="msite_container">
      <router-link to="/search">
        <head-top class="header" :isTitle="isTitle" :headType="'link_search'"></head-top>
      </router-link>
      <swiper ref="mySwiper" class="swiperContainer" :options="swiperOption" >
        <swiper-slide v-for="(item, index) in foodList" :key="index">
          <ul class="list">
            <router-link :to="{path: '/food', query: {title: foodItem.title}}" tag="li" class="item"  v-for="foodItem in item" :key="foodItem.title" >
              <img :src="foodItem.image_url" alt="">
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
export default {
  data () {
    return {
      isTitle: false,
      foodList: [
        [
          { title: '甜品饮品', link: '', image_url: 'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg' },
          { title: '商超便利', link: '', image_url: 'https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg' },
          { title: '美食', link: '', image_url: 'https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg' },
          { title: '简餐', link: '', image_url: 'https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg' },
          { title: '新店特惠', link: '', image_url: 'https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg' },
          { title: '准时达', link: '', image_url: 'https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg' },
          { title: '预订早餐', link: '', image_url: 'https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg' },
          { title: '土豪推荐', link: '', image_url: 'https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg' }
        ],
        [
          { title: '川湘菜', link: '', image_url: 'https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg' },
          { title: '麻辣烫', link: '', image_url: 'https://fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg' },
          { title: '包子粥店', link: '', image_url: 'https://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg' },
          { title: '鲜花蛋糕', link: '', image_url: 'https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg' },
          { title: '日韩料理', link: '', image_url: 'https://fuss10.elemecdn.com/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg' },
          { title: '果蔬生鲜', link: '', image_url: 'https://fuss10.elemecdn.com/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg' },
          { title: '汉堡薯条', link: '', image_url: 'https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg' },
          { title: '披萨意面', link: '', image_url: 'https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg' }
        ]
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: 3000,
        speed: 400,
        loop: true
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
  },
  created () {

  },
  methods: {
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
