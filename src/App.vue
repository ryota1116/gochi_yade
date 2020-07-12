<template>
  <v-app>
    <v-container>
      <v-layout wrap>
        <v-flex xs12 sm6 md4>
          <!-- xsが600px未満/ smが600px以上960px未満/ mdが960px以上1264px未満/ lgが1264px以上1904px未満/ xlが1904px以上 -->
          <Home cuisines="cuisines"></Home>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Home from './components/Home.vue';
import { firestore } from './plugins/firestore';
// import axios from "axios";

export default {
  name: 'App',
  components: {
    Home: Home
  },
  // コンポーネントにdataを渡すときは、関数にしてreturnする必要がある
  data: function() {
    return {
      cuisines: [
        // type: Object
      ]
    }
  },
  created() {
    firestore.collection("cuisine").get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        this.cuisines.push(doc.data());
        console.log(doc.data())
      });
    });
  }
};
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