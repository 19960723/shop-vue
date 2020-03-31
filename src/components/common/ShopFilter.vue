<template>
  <div>
      <ul class="filterList" v-show="filterMsg=== 'sort_filter1'">
        <li class="item" v-for="(item, index) in filterSort" :key="item.id" :class="{'selected_active': item.isActive}" @click="handleFilter(index)" ><span>{{item.title}}</span><span class="iconfont" v-if="item.isActive" :class="iconStr"></span></li>
      </ul>
      <div v-show="filterMsg=== 'sort_filter2'">
        <div class="filter_container2">
          <div class="discount_list">
            <h3>优惠活动</h3>
            <ul class="list">
              <li class="item">会员领红包</li>
              <li class="item">首单立减</li>
              <li class="item">津贴优惠</li>
              <li class="item">首次光顾立减</li>
              <li class="item">满减优惠</li>
              <li class="item">下单返红包</li>
              <li class="item">进店领红包</li>
              <li class="item">配送费优惠</li>
              <li class="item">赠品优惠</li>
              <li class="item">特价商品</li>
              <li class="item">品质联盟红包</li>
            </ul>
          </div>
          <div class="discount_list">
            <h3>商家服务</h3>
            <ul class="list">
              <li class="item">蜂鸟专送</li>
              <li class="item">到店自取</li>
              <li class="item">品牌商家</li>
              <li class="item">新店</li>
              <li class="item">接受预订</li>
              <li class="item">食无忧</li>
              <li class="item">开发票</li>
            </ul>
          </div>
        </div>
        <div class="subButton">
          <div class="clear">清空</div>
          <div class="viewShop active">查看104个商家</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iconStr: 'icon-V',
      filterSort: [
        { id: 1, title: '综合排序', iconfont: '&#xe701;', isActive: true },
        { id: 2, title: '好评优选', iconfont: '&#xe701;', isActive: false },
        { id: 3, title: '起送价最低', iconfont: '&#xe701;', isActive: false },
        { id: 4, title: '配送最快', iconfont: '&#xe701;', isActive: false },
        { id: 5, title: '配送费最低', iconfont: '&#xe701;', isActive: false },
        { id: 6, title: '人均从低到高', iconfont: '&#xe701;', isActive: false },
        { id: 7, title: '人均从高到低', iconfont: '&#xe701;', isActive: false },
        { id: 8, title: '通用排序', iconfont: '&#xe701;', isActive: false }
      ]
    }
  },
  props: ['filterMsg'],
  watch: {
    filterMsg (newFade, oldFade) {
      console.log(newFade)
    }
  },
  methods: {
    handleFilter (index) {
      for (const i in this.filterSort) {
        this.filterSort[i].isActive = false
      }
      this.filterSort[index].isActive = true
      this.$emit('closeFilter', this.filterSort[index].title)
    }
  },
  beforeCreate () {
    console.log()
    document.querySelector('body').setAttribute('style', 'overflow:hidden')
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  }
}
</script>

<style lang="scss" scoped>
.filterList{
  padding: 0.1rem 0.14rem;
  .item{
    line-height: 0.28rem;
    display: flex;
    justify-content: space-between;
    &.selected_active{
      color: #3190e8;
    }
    &:nth-child(1){
    }
  }
}
.filter_container2{
  padding: 0 0.08rem 0.38rem;
  height: 3rem;
  .discount_list{
    h3{
      color: #a2a1a1;
      font-size: 0.11rem;
    }
    .list{
      display: grid;
      width: 100%;
      overflow: hidden;
      padding: 0.1rem;
      grid-template-columns: 30% 30% 30%;
      grid-row-gap: 20px;
      grid-column-gap: 20px;
      .item{
        background: rgba(0,0,0,0.06);
        height: 0.26rem;
        line-height: 0.26rem;
        text-align: center;
        color: rgba(0,0,0,0.8);
      }
    }
  }
}
.subButton{
  position: fixed;
  bottom: -1;
  width: 100%;
  div{
    float: left;
    width: 50%;
    text-align: center;
    font-size: 0.12rem;
    color: #a2a1a1;
    border-top: 0.5px solid rgba(0,0,0,0.06);
    height: 0.38rem;
    line-height: 0.38rem;
    background: #f5f5f5;
    &.active{
      background: #409EFF;
      color: #fff;
      border-top: none;
    }
  }
}
</style>
