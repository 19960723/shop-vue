<template>
  <div>
    <head-top class="header" :headType="'search_info'"></head-top>
    <div class="search_response">
      <h3 class="search_title">搜索发现</h3>
      <div class="search_find">
        <ul class="list">
          <li class="item">一点点</li>
          <li class="item">高八斗</li>
          <li class="item">黄焖鸡</li>
          <li class="item">汀洲佬客家鸭肉粥</li>
          <li class="item">老家的味道</li>
          <li class="item">一米香</li>
          <li class="item">清口清汤面</li>
          <li class="item">田鸡</li>
        </ul>
      </div>
      <div class="search_shop_list">
        <div class="shop_item" v-for="(item, index) in search_data" :key="index">
          <section>
            <img :src="'http://elm.cangdu.org/img/' + item.img_path" alt="">
          </section>
          <div class="shop_item_right">
            <p>{{item.title}}</p>
            <span>根据你的下单推荐</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headTop from '../../components/header/head'
export default {
  data () {
    return {
      search_data: [
        { title: '林家黄焖鸡米饭', img_path: '170cb04b8bb64881.jpg' },
        { title: '草本汤 (福州融侨锦江...)', img_path: '16fe623f60c63419.jpg' },
        { title: '一米香牛肉饭(通湖路店)', img_path: '16b409fd2fd42531.jpg' },
        { title: '客家牛肉馆(光荣路店)', img_path: '16b409d3da142529.jpg' }
      ]
    }
  },
  components: {
    headTop
  }
}
</script>

<style lang="scss" scoped>
.search_response{
  font-size: 12px;
  padding:  0 0.08rem;
  .search_title{
    font: 0.12rem "PingFangSC-Regular";
    font-weight: bold;
    color: #000;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
  }
  .search_find{
    .list{
      display: flex;
      flex-wrap: wrap;
      .item{
        border-radius: 0.04rem;
        padding: 0.05rem 0.08rem;
        margin-right: 0.08rem;
        margin-bottom: 0.06rem;
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }
  .search_shop_list{
    margin-top: 0.14rem;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 0.18rem;
    grid-column-gap: 0.02rem;
    .shop_item{
      display: flex;
      img{
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 0.04rem;
        margin-right: 0.08rem;
      }
      .shop_item_right{
        p{
          font-size: 0.1rem;
          padding: 0 0 0.03rem 0;
        }
        span{
          font-size: 0.08rem;
          &:nth-child(2){
            padding: 0.01rem;
            background: rgba(255, 96, 0, 0.1);
            color: rgba(255, 96, 0);
            font-size: 0.08rem;
            border-radius: 0.02rem;
          }
        }
      }
    }
  }
}
</style>
