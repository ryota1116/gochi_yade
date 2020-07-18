// // import Firebase
import Vue from 'vue'
// import VueFire from 'vuefire';
import firebase from 'firebase/app';
import "firebase/firestore";

import { firestorePlugin } from 'vuefire'
// Vue.use(VueFire)
Vue.use(firestorePlugin)

// Firebaseを初期化
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_2ZSx3w9LOlTV3gAEJ8btqyMyjk8DYGA",
  authDomain: "gochi-yade.firebaseapp.com",
  databaseURL: "https://gochi-yade.firebaseio.com",
  projectId: "gochi-yade",
  // cloud storageを使えるようになる
  storageBucket: "gochi-yade.appspot.com",
  messagingSenderId: "146410533785",
  appId: "1:146410533785:web:94ec468e7fffc5c4b95908",
  measurementId: "G-97V976H53X"
});

export const db = firebaseApp.firestore();
db.settings({ timestampsInSnapshots: true })

// export default firestore

// // export const db = firebaseApp.firestore();


// // firebase.firestore();
// // export default firebase;
// // export default Vuefire;
// // export default firestore