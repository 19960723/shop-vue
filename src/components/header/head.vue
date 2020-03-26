<template>
  <div>
    <mt-header :title="isTitle?titleMsg:''" v-if="!headType">
      <mt-button class="iconfont icon_set" slot="right">&#xe620;</mt-button>
      <mt-button class="iconfont icon_info" slot="right">&#xe606;</mt-button>
    </mt-header>
    <div v-if="headType === 'link_search'" class="head_top">
      <div class="head_search">
        <p class="search_text"><span class="iconfont search_icon">&#xe60e;</span> 星巴克今天免运费</p>
      </div>
    </div>
    <div v-if="headType === 'search_info'" class="header_search">
      <span class="iconfont" @click="$router.go(-1)">&#xe613;</span>
      <div class="search_box">
        <input type="search" class="search_input" v-model="search_value" placeholder="星巴克今天免运费">
      </div>
      <span class="button_sub">搜索</span>
    </div>
    <div class="header_back" v-if="headType === 'shop_back'">
      <span class="iconfont back_icon" @click="$router.go(-1)">&#xe628;</span>
      <h3 class="back_text">{{titleMsg}}</h3>
      <router-link to="/search"><span class="iconfont search_back_icon">&#xe608;</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      search_value: ''
    }
  },
  props: ['isTitle', 'titleMsg', 'headType']
}
</script>

<style lang="scss" scoped>
.mint-header{
  background-color: #fff;
  height: 0.46rem;
}
.mint-header .mint-button.icon_set{
  font-size: 0.2rem;
  padding-right: 0.12rem;
  color:#000;
}
.mint-header .mint-button.icon_info{
  font-size: 0.18rem;
  padding-right: 0.04rem;
  color:#000;
}
.head_top{
  display: flex;
  background: #fff;
  height: 0.46rem;
  padding: 0 0.08rem;
  align-items: center;
  .head_search{
    background: rgba(0, 0, 0, 0.08);
    width: 100%;
    height: 0.28rem;
    border-radius: 0.3rem;
    .search_text{
      text-align: center;
      font-size: 0.1rem;
      line-height: 0.28rem;
      color: #a7a6a6;
      .search_icon{
        color: #767373;
        font-size: 0.11rem;
        padding-right: 0.02rem;
        font-weight: bold;
      }
    }
  }
}
.header_search{
  display: flex;
  font-size: 12px;
  height: 0.46rem;
  .search_box{
    flex: 1;
    line-height: 0.46rem;
    .search_input{
      width: 100%;
      height: 0.29rem;
      border-radius: 0.3rem;
      background: rgba(0, 0, 0, 0.08);
      line-height: 0.29rem;
      font-size: 0.1rem;
      text-indent: 0.1rem;
      letter-spacing: 0.01rem;
      caret-color: #3190e8;
      &::-webkit-input-placeholder {
        color: #a7a6a6;
      }
    }
  }
  span{
    padding: 0 0.09rem;
    line-height: 0.46rem;
    &.iconfont{
      font-weight: bold;
    }
    &.button_sub{
      font-size: 0.12rem;
    }
  }
}
.header_back{
  display: flex;
  font-size: 0.12rem;
  height: 0.4rem;
  background-image: linear-gradient(to right,rgb(102, 177, 255) 10%, #409EFF);
  color: #fff;
  line-height: 0.4rem;
  padding: 0 0.08rem;
  display: flex;
  justify-content: space-between;
  span{
    font-weight: bold;
  }
  .back_icon{
    padding: 0 0.1rem 0 0.05rem;
    float: left;
  }
  .back_text{
    transform: translateX(-1rem);
  }
  .search_back_icon{
    color: #fff;
  }
}
</style>

<style >
.mint-header .mint-header-title{
  color: #000;
  font-size: 0.14rem;
}
</style>
