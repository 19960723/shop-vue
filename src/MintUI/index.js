import { Button, Header, MessageBox, Tabbar, TabItem, CellSwipe, Cell, Swipe, SwipeItem, Search } from 'mint-ui'

const mint = {
  install (Vue) {
    Vue.component(Button.name, Button)
    Vue.component(Header.name, Header)
    Vue.component(Tabbar.name, Tabbar)
    Vue.component(TabItem.name, TabItem)
    Vue.component(CellSwipe.name, CellSwipe)
    Vue.component(Cell.name, Cell)
    Vue.component(Swipe.name, Swipe)
    Vue.component(SwipeItem.name, SwipeItem)
    Vue.component(Search.name, Search)
    Vue.prototype.$messageBox = MessageBox
  }
}

export default mint
