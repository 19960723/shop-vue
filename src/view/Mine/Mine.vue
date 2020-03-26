<template>
  <div class="mine_container">
    <head-top class="header" :isTitle="isTitle" :titleMsg="'我的'"></head-top>
    <div class="mine_top">
      <div class="top_left">
        <h3>立即登录<span class="iconfont">&#xe602;</span></h3>
        <p>饿不饿都上饿了么</p>
      </div>
      <div class="top_tright iconfont"> &#xe600;</div>
    </div>
    <div class="purse_Container">
      <div class="left_card card">
        <div>
          <h3>红包卡劵</h3>
          <p>登录后查看</p>
        </div>
        <div class="iconfont card_icon card_icon_left">&#xe673;</div>
      </div>
      <div class="right_card card">
        <div>
          <h3>钱包</h3>
          <p>金钱、借钱、福利</p>
        </div>
        <div class="iconfont card_icon card_icon_right">&#xe604;</div>
      </div>
    </div>
    <div class="cellList">
      <mt-cell :title="item.title" is-link v-for="(item, index) in list_cell" :key="index" :value="item.value">
        <span slot="icon" width="20" height="20" class="iconfont icon-list" :class="item.icon_msg"></span>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import headTop from '@/components/header/head'
export default {
  data () {
    return {
      isTitle: false,
      list_cell: [
        { title: '我的收藏', icon_msg: 'icon-shoucang' },
        { title: '我的客服', icon_msg: 'icon-kefu' },
        { title: '我的地址', icon_msg: 'icon-dizhi' },
        { title: '推荐有奖', icon_msg: 'icon-liwu', value: '得15元' },
        { title: '商务合作', icon_msg: 'icon-shangwu' },
        { title: '办卡有礼', icon_msg: 'icon-qia' },
        { title: '3小时公益', icon_msg: 'icon-gongyi' },
        { title: '企业订单', icon_msg: 'icon-iconqyxx' },
        { title: '话费充值', icon_msg: 'icon-24huafei' }
      ]
    }
  },
  created () {
    this.listenerFunction()
  },
  methods: {
    handleScroll (fn, time) {
      var timeout = null
      return function () {
        if (timeout !== null) clearTimeout(timeout)
        timeout = setTimeout((fn), time)
      }
    },
    handle () {
      if (window.pageYOffset > 40) {
        this.isTitle = true
      } else {
        this.isTitle = false
      }
    },
    listenerFunction () {
      document.addEventListener('scroll', this.handleScroll(this.handle, 100))
    }
  },
  components: {
    headTop
  }
}
</script>

<style lang="scss" scoped>
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.head_logo{
  left: 0.4rem;
  font-weight: 400;
}
.mine_container{
  margin-top: 0.46rem;
  background: #fff;
  padding: 0 0.08rem;
}
.mine_top{
  display: flex;
  justify-content: space-between;
  .top_left{
    padding: 0.06rem 0 0 0.04rem;
    letter-spacing: 2px;
    h3{
      font-size: 0.24rem;
      font-weight: bold;
    }
    p{
      padding-top: 0.06rem;
      font-size: 0.12rem;
      color: #aba7a7;
      letter-spacing: 1px;
    }
  }
  .top_tright{
    width: 0.7rem;
    height: 0.7rem;
    background: rgba(49, 144, 232, 0.3);
    border-radius: 50%;
    font-size: 0.5rem;
    color: #fff;
    text-align: center;
    line-height: 0.7rem;
  }
}
.purse_Container{
  padding-top: 0.2rem;
  font-size: 0.12rem;
  display: flex;
  justify-content: space-around;
  .card{
    width: 47%;
    border-radius: 0.08rem;
    padding: 0.08rem;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 11px 1px rgba(0, 0, 0, 0.08);
    h3{
      font-weight: 600;
      color: #000;
      padding-bottom: 0.1rem;
    }
    p{
      font-size: 0.1rem;
      color: #aba7a7;
    }
    .card_icon{
      font-size: 0.24rem;
      &.card_icon_left{
        color: rgba(235, 126, 140, 0.8);
      }
      &.card_icon_right{
        color: rgba(49, 144, 232, 0.8);
      }
    }
  }
}
.cellList{
  margin-top: 0.1rem;
}

</style>
<style>
.mint-cell-wrapper{
  background-image: none  !important;
  border-top: 0.5px solid rgba(0, 0, 0, 0.04) !important;
}
.icon-list{
  color: rgba(49, 144, 232);
  font-size: 0.18rem;
}
.mint-cell-value.is-link{
  font-size: 12px;
}
</style>
