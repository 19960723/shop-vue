<template>
  <div class="container_index">
    <router-view></router-view>
    <mt-tabbar v-model="selected" class="tabbar_container">
      <mt-tab-item  v-for="(item, index) in tarbBar" :key="index" :id="item.ids">
        <div class="tab_item"><span class="iconfont" :class="item.iconSrc"></span></div>
        {{item.msg}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 'msite',
      tarbBar: [
        { path: '/', iconSrc: 'icon-SSS', msg: '外卖', ids: '/' },
        { path: '/life', iconSrc: 'icon-shenghuo', msg: '生活', ids: 'life' },
        { path: '/order', iconSrc: 'icon-dingdan', msg: '订单', ids: 'order' },
        { path: '/mine', iconSrc: 'icon-tubiao-', msg: '我的', ids: 'mine' }
      ]
    }
  },
  watch: {
    selected (val, oldVal) {
      this.$router.push(val).catch(err => err)
      localStorage.setItem('navTabIndex', val)
    }
  },
  created () {
    const path = this.$route.path
    if (path === '/index') {
      this.selected = '/'
      return
    }
    const localData = localStorage.getItem('navTabIndex')
    this.selected = localData
  },
  methods: {
    reload () {
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.container_index{
  padding-bottom: 0.45rem;
}
.tabbar_container{
  position: fixed;
  bottom: 0;
  color: #666;
  .tab_item{
    padding-bottom: 2px;
  }
  .iconfont{
    font-size: 0.18rem;
  }
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: rgba(0, 0, 0, 0);
}
</style>
