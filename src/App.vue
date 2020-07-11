<template>
  <v-app>
    <v-container>
      <!-- :cuisines='cuisines'はどっちがどっち？ -->
      <CuisineMenu :cuisines='cuisines'></CuisineMenu>
    </v-container>
  </v-app>
  <!-- <div id="app"> -->
  <!-- </div> -->
</template>

<script>
import CuisineMenu from './components/CuisineMenu.vue';
// import axios from "axios";
import { firestore } from './plugins/firestore';
// import "firebase/firestore";


export default {
  name: 'App',
  // コンポーネントにdataを渡すときは、関数にしてreturnする必要がある
  data: function() {
    return {
      cuisines: [
        // type: Object
      ]
    }
  },
  created() {
    firestore.collection("cuisine").doc('French').collection('duck_roti').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        this.cuisines.push(doc.data());
        console.log(doc.data())
      });
    });

    // console.log(this.cuisines);

    // this.cuisines = firestore.collection("cuisine").get().then(function(querySnapshot) {
    //   querySnapshot.forEach(function(doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // });
    // axios.get('https://firestore.googleapis.com/v1/projects/gochi-yade/databases/(default)/documents/cuisine')
    // .then(response => {
    //   this.cuisines = response.data.documents;
    //   console.log(response.data.documents);
    // });
  },
  components: {
    // HelloWorld,
    CuisineMenu: CuisineMenu
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