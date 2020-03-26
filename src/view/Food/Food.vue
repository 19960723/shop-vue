<template>
  <div class="food_container">
    <head-top class="header" :headType="'shop_back'" :titleMsg="this.$route.query.title"></head-top>
    <div class="food_list">
      <shop-list></shop-list>
    </div>
  </div>
</template>

<script>
import headTop from '../../components/header/head'
import shopList from '../../components/common/shoplist'
export default {
  mounted () {
    console.log(this.$route.query.title)
  },
  components: {
    headTop,
    shopList
  }
}
</script>

<style lang="scss" scoped>
.food_container{
  padding-top: 0.4rem;
}
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
</style>
