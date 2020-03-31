<template>
  <div class="food_container">
    <div class="fix_bac" v-show="filter_fade" @click="closeFilter()" @touchmove.prevent @mousewheel.prevent></div>
    <head-top ref="head" class="header" :headType="'shop_back'" :titleMsg="this.$route.query.title"></head-top>
    <div class="food_list" ref="foodCon">
      <div ref="swiper" class="swiper">
        <swiper ref="mySwiper" class="swiperContainer" :options="swiperOption" >
          <swiper-slide v-for="item in mock_banner" :key="item.id">
            <img :src="item.img_url" alt="">
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
      </div>
      <div class="shop_filter" :class="{isFixed: filterFix}" @mousewheel.prevent>
        <ul class="filter_list">
          <li class="item" :class="{'filter_active':isActive == 1}" @click="handleToggle(1)">
            <p class="sort"><span>{{sortStr}}</span><span class="iconfont icon" :class="iconStr"></span></p>
          </li>
          <li class="item" :class="{'filter_active':isActive == 2}" @click="handleToggle(2)">
            <span class="filter_center" >距离</span>
          </li>
          <li class="item" :class="{'filter_active':isActive == 3}" @click="handleToggle(3)">
            <span>销售</span>
          </li>
          <li class="item" :class="{'filter_active':isActive == 4}" @click="handleToggle(4)">
            <p>筛选<span class="iconfont" >&#xe60c;</span></p>
          </li>
        </ul>
        <transition name="showlist">
          <section class="dia_shop" v-if="filter_fade">
            <shop-filter @closeFilter="closeFilter" ref="filterShop" :filterMsg="filter_msg"></shop-filter>
          </section>
        </transition>
      </div>
    </div>
    <shop-list class="shopContainer" :sortStr="sortStr"></shop-list>
  </div>
</template>

<script>
import headTop from '@/components/header/head'
import shopList from '@/components/common/shoplist'
import shopFilter from '@/components/common/ShopFilter'
export default {
  data () {
    return {
      filter_list: {
        filter_list1: true,
        filter_list2: true,
        filter_list3: true,
        filter_list4: true
      },
      iconStr: 'icon-xia',
      sortStr: '综合排序',
      filter_msg: '',
      isActive: 1,
      filterFix: false,
      filter_fade: false,
      filter_id: 0,
      mock_banner: [
        { id: 1, img_url: '//imagev2.xmcdn.com/group75/M02/B5/E3/wKgO3V5TZRbwfKyzAAIui95-suw896.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=large_pop&device_type=ios' },
        { id: 2, img_url: '//imagev2.xmcdn.com/group78/M08/28/F9/wKgO1l57N5PgfIE5AAH-qa0pxcc468.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=large_pop&device_type=ios' },
        { id: 3, img_url: '//imagev2.xmcdn.com/group76/M00/29/78/wKgO1F5q8rejE3p1AADqg8LTt7c035.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=large_pop&device_type=ios' },
        { id: 4, img_url: '//imagev2.xmcdn.com/group76/M00/29/78/wKgO1F5q8rejE3p1AADqg8LTt7c035.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=large_pop&device_type=ios' }
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
  watch: {
    filter_fade (newFade, oldFade) {
      if (newFade) {
        this.iconStr = 'icon-shang'
      } else {
        this.iconStr = 'icon-xia'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll) // Dom树加载完毕
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll) // 销毁页面时清除
  },
  methods: {
    toggleShow (title) {
      if (title) {
        this.sortStr = title
      }
    },
    closeFilter (title) {
      if (!title) {
        const str = this.sortStr
        this.sortStr = str
      } else {
        this.sortStr = title
      }
      this.filter_fade = false
      this.filter_id = 0
    },
    handleToggle (index) {
      this.isActive = parseInt(index)
      switch (index) {
        case 1:
          if (this.filter_id === 0 || this.filter_id === 2) {
            this.filter_msg = 'sort_filter1'
            this.filter_fade = true
            this.toggleShow(this.sortStr)
            this.filter_id = 1
          } else if (this.filter_id === 1) {
            this.filter_fade = false
            this.filter_id = 0
          }
          break
        case 2:
          this.filter_id = 0
          this.$refs.filterShop.handleFilter(0)
          this.filter_fade = false
          break
        case 3:
          this.filter_id = 0
          this.$refs.filterShop.handleFilter(0)
          this.filter_fade = false
          break
        case 4:
          if (this.filter_id === 0 || this.filter_id === 1) {
            this.filter_msg = 'sort_filter2'
            if (this.$refs.filterShop) {
              this.$refs.filterShop.handleFilter(0)
            }
            this.filter_fade = true
            this.filter_id = 2
          } else if (this.filter_id === 2) {
            this.filter_fade = false
            this.filter_id = 0
          }
          break
      }
      const swiperHeight = this.$refs.swiper.offsetHeight
      if (document.documentElement.scrollTop < swiperHeight) {
        document.documentElement.scrollTop = swiperHeight + 2
      }
    },
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const swiperHeight = this.$refs.swiper.offsetHeight
      // const headerHeight = this.$refs.head.$el.offsetHeight
      // const height = parseInt(swiperHeight) + parseInt(headerHeight)
      if (scrollTop > swiperHeight) {
        this.filterFix = true
      } else {
        this.filterFix = false
      }
    }
  },
  components: {
    headTop,
    shopList,
    shopFilter
  }
}
</script>

<style lang="scss" scoped>
.fix_bac{
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: rgba(0,0,0,0.2);
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.6s;
}
.food_container{
  padding-top: 0.4rem;
  .shopContainer{
    padding-top: 0.2rem;
  }
}
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.food_list{
  .swiper{
    padding: 0 0.08rem;
    .swiperContainer{
      height: 1.4rem;
      overflow: hidden;
      padding-top: 0.08rem;
      img{
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }
  }
  .shop_filter{
    font-size: 0.11rem;
    width: 100%;
    position: absolute;
    height: 0.3rem;
    &.isFixed {
      position: fixed;
      top: 0.4rem;
      z-index: 10;
    }
    .filter_list{
      padding: 0.08rem;
      z-index: 100;
      display: flex;
      justify-content: flex-start;
      background: #f5f5f5;
      position: relative;
      .item{
        padding-right: 0.2rem;
        &.filter_active{
          color: #3190e8;
        }
        .icon{
          padding-left: 0.1rem;
          font-size: 0.1rem;
        }
        &:nth-child(4){
          position: absolute;
          right: 0;
          padding-right: 0.08rem;
        }
      }
    }
    .dia_shop{
      background-color:#f5f5f5;
      position: relative;
      top: -0.02rem;
      overflow: auto;
    }
  }
}
.showlist-enter-active,
.showlist-leave-active {
  transition: all 0.3s;
  transform: translateY(0);
}
.showlist-enter,
.showlist-leave-active {
  opacity: 0;
  transform: translateY(-100%);
}

</style>
