<template>
  <div id="app">
    <div class="fix_bg" v-if="this.$bg_show">
      <video src="./assets/videos/bg.mp4" muted autoplay loop></video>
    </div>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/assets/scss/common.scss';
.router-fade-enter, .router-fade-leave-to{
  transform: scale(0);
}
.router-fade-enter-to, .router-fade-leave{
  transform: scale(1);
}
.router-fade-enter-active, .router-fade-leave-active{
  transition: all .2s;
}

.fix_bg{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  video{
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
</style>
