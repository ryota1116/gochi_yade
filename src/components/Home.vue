<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1>ゴチになります</h1>
          <v-select v-model="selectedPrice" :items="priceOptions" label="設定金額"></v-select>
          <h3>今回の設定金額: {{ selectedPrice }}円</h3>
          <br>

          <!-- 料理のジャンル選択 -->
          <v-select v-model="genre" :items="genres" label="ジャンル選択"></v-select>

          <!-- 選択したジャンルの料理一覧 -->
          <div v-for="(cuisine, index) in cuisinesOfSelectedGenre" :key="index">
            <v-checkbox
              v-model="listOfOrderedCuisines"
              :value="cuisine"
              :label="cuisine.name">
            </v-checkbox>
            <v-img :src="cuisine.image"></v-img>
          </div>

          <!-- <div v-for="(cuisine, index) in frenchCuisines" :key="index">
            <input
              type="checkbox"
              :id="'cuisine' + key"
              :value="{name: cuisine.name, price: cuisine.price}"
              v-model="orderedCuisine"
            >
            <label :for="'cuisine' + key">{{ cuisine.name }}</label>
          </div> -->

          <!-- 選択した料理 -->
          <h4>注文する料理</h4>
          <ul v-for="(cuisine, index) in listOfOrderedCuisines" :key="index">
            <li>{{ index + 1 }}皿目: {{ cuisine.name }}</li>
          </ul>
          <!-- 注文結果 -->
          <div class="my-2">
            <v-btn @click="active" color="warning" dark>STOP</v-btn>
          </div>
          <div v-if="isActive">
            <h4>
              注文金額:{{ totalAmountMoneyOfOrder }}円<br>
              ( {{ totalMoneyDeference }}円 )
            </h4>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import FrenchCuisine from './FrenchCuisine';
// import JapaneseCuisine from './JapaneseCuisine';
// import ItalianCuisine from './ItalianCuisine';

export default {
  // ジャンル毎に取得したデータを複数propsで受け取る？
  props: {
    french_collection: {
      type: Array,
      default: () => []
    },
    japanese_collection: {
      type: Array,
      default: () => []
    }
  },
  components: {
    // FrenchCuisine,
    // JapaneseCuisine,
    // ItalianCuisine
  },
  data: ()=> {
    return {
      isActive: false,
      priceOptions: [5000, 10000, 25000],
      selectedPrice: "",
      genres: ['French', 'Japanese', 'Italian'],
      genre: "",
      listOfOrderedCuisines: []
    }
  },
  methods:{
    active: function() {
      this.isActive = !this.isActive
    }
  },
  computed: {
    selectedTabComponent: function() {
      return this.genre + "Cuisine";
      // .toLowerCase()
    },
    cuisinesOfSelectedGenre: function() {
      // 現状では、propsで受け取った複数のcollectionの中の、1つのcollectionを格納してる
      const cuisinesOfSelectedGenre = [];
      if (this.genre === 'French') {
        for (let i = 0; i < this.french_collection.length; i++) {
          let cuisine = this.french_collection[i];
          cuisinesOfSelectedGenre.push(cuisine);
        }
      } else if (this.genre === 'Japanese') {
        for (let i = 0; i < this.japanese_collection.length; i++) {
          let cuisine = this.japanese_collection[i];
          cuisinesOfSelectedGenre.push(cuisine);
        }
      }
      return cuisinesOfSelectedGenre;
    },
    totalAmountMoneyOfOrder: function() {
      // 金額を足し算してる
      const total = this.listOfOrderedCuisines.reduce((i, next) => i += Number(next.price), 0);
      return total;
    },
    totalMoneyDeference: function() {
      // TODO:この定数totalをtotalAmountMoneyOfOrderと纏めれない？
      const total = this.listOfOrderedCuisines.reduce((i, next) => i += Number(next.price), 0);
      const deference = total - this.selectedPrice;
      // const deference = Math.sign(total - 5000);
      return deference;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
