<template>
  <div id="app">
    <h1>ゴチになります</h1>
    <span>今回の設定金額: ¥25,000</span>
    <p>メニュー一覧</p>
    <!-- <div v-for="cuisine in cuisines" :key="cuisine.name">
      <div>{{ cuisine.fields.name.stringValue }}</div>
    </div> -->
    <!-- :cuisines='cuisines'はどっちがどっち？ -->
    <CuisineMenu :cuisines='cuisines'></CuisineMenu>
  </div>
</template>

<script>
import CuisineMenu from './components/CuisineMenu.vue'
import axios from "axios";

export default {
  name: 'App',
  // コンポーネントにdataを渡すときは、関数にしてreturnする必要がある
  data: function() {
    return {
      cuisines: {
        type: Array
      }
    }
  },
  created() {
    axios.get('https://firestore.googleapis.com/v1/projects/gochi-yade/databases/(default)/documents/cuisine')
    .then(response => {
      this.cuisines = response.data.documents;
      console.log(response.data.documents);
    });
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
