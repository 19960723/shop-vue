<template>
 <div>
  <div id="topPart">顶部距离</div>
  <div id="navBar" :class="{isFixed:istabBar}">固定导航栏</div>
  <div id="mainPart">
    <ul>
      <li>内容部分</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      istabBar: false
    }
  },
  methods: {
    // 添加一个方法 兼容
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 固定导航栏
      const topBar = document.querySelector('#topPart')
      const navBar = document.querySelector('#navBar')
      const mainPart = document.querySelector('#mainPart')
      if (scrollTop > topBar.offsetHeight) {
        this.istabBar = true
        mainPart.style.paddingTop = navBar.offsetHeight + 'px'
      } else {
        this.istabBar = false
        mainPart.style.paddingTop = '0px'
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll) // Dom树加载完毕
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll) // 销毁页面时清除
  }
}
</script>

<style>
 #topPart{
  font-size: 0.2rem;
  width: 100%;
  height: 300px;
  background-color: yellow;
 }
 .isFixed {
  font-size: 0.2rem;
  position: fixed;
  top: 0;
  z-index: 10;
 }
 #navBar {
  font-size: 0.2rem;
  width: 100%;
  height: 50px;
  background-color: red;
 }
 #mainPart {
   font-size: 0.2rem;
  width: 100%;
 }
 #mainPart ul {
  width: 100%;
 }
 #mainPart ul li {
  width: 100%;
  height: 40px;
  background-color: orange;
  margin-bottom: 10px;
 }
</style>
