<template>
  <div class="starContainer" >
    <section  class="section_star">
      <span class="iconfont select" v-for="item in 5" :key="item">&#xe612;</span>
    </section>
    <section class="section_star" :style="'width:'+ rating/10 + 'rem'">
      <span class="iconfont select" v-for="item in 5" :key="item">&#xe60f;</span>
    </section>
  </div>
</template>

<script>
export default {
  props: ['rating']
}
</script>

<style lang="scss" scoped>
.starContainer{
  font-size: 10px;
  .section_star{
    overflow: hidden;
    position: absolute;
  }
}
.iconfont{
  color: rgb(255, 204, 1);
}
.asd{
  color: #d1d1d1;
}
.select{
  font-size: 0.1rem;
}
</style>
