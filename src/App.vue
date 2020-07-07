<template>
  <div id="app">
    <h1>ゴチになります</h1>
    <span>今回の設定金額: ¥25,000</span>
    <p>メニュー一覧</p>
    <CuisineMenu :order-cuisine='orderCuisine'></CuisineMenu>
  </div>
</template>

<script>
import CuisineMenu from './components/CuisineMenu.vue'

export default {
  name: 'App',
  data() {
    return {
      orderCuisine: [],
      menu: []
    }
  },
  components: {
    CuisineMenu: CuisineMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
