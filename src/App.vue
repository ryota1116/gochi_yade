<template>
  <!-- Veutifyを使うために必須の要素。この内側がVuetifyの対象と認識される -->
  <v-app>
    <v-container>
      <v-layout wrap>
        <v-flex>
          <!--xsが600px未満/ smが600px以上960px未満/ mdが960px以上1264px未満/ lgが1264px以上1904px未満/ xlが1904px以上-->
          <Home :cuisines="cuisines"></Home>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Home from './components/Home.vue';
import { db } from './plugins/firestore';
// import { storage } from '@/plugins/cloudstorage';
// import firebase from 'firebase/app';
// import axios from "axios";

export default {
  name: 'App',
  components: {
    Home: Home
  },
  // コンポーネントにdataを渡すときは、関数にしてreturnする必要がある
  data: function() {
    return {
      cuisines: [],
      cuisineImages: []
    }
  },
  created() {
    db.collection("cuisine").get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.cuisines.push(doc.data());
        console.log(doc.data())
      });
    });
    // db.collection("japanese").get().then(querySnapshot => {
    //   querySnapshot.forEach(doc => {
    //     // doc.data() is never undefined for query doc snapshots
    //     this.japanese_collection.push(doc.data());
    //     console.log(doc.data())
    //   });
    // });

    // 参照を作成するために使用される「ストレージサービス」への参照を取得する
    // const storage = firebase.storage();
    // ストレージ参照を作成する。この参照を使って、ファイルをいじったりする
    // const storageRef = storage.ref();
    // const res = storageRef.listAll();
    // res.items.forEach(itemRef => {
    //   itemRef.getDownloadURL().then(url => {
    //     this.cuisineImages.push(url)
    //   })
    // })
    // this.cuisineImages = storageRef.child("lamb_saute.jpg");
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Source+Serif+Pro:ital@1&display=swap");
/* html {
  background: linear-gradient(white, #757575);
} */
#app {
  /* background: linear-gradient(white, #757575); */
  /* background-image: url("~@/assets/back.jpg"); */
  /* background-size: cover; */
  font-family: 'Great Vibes', cursive;
  font-family: 'Source Serif Pro', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FAFAFA;
  margin-top: 60px;
}
</style>