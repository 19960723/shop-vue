export default {
  rem () {
    var docEle = document.documentElement
    var evt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    var fn = function () {
      var width = docEle.clientWidth
      width = width < 320 ? 320 : width
      width = width > 640 ? 640 : width
      width && (docEle.style.fontSize = 100 * (width / 320) + 'px')
    }
    window.addEventListener(evt, fn, false)
    document.addEventListener('DOMContentLoaded', fn, false)
  }
}
