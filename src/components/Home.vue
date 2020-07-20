<template>
  <div>
    <v-container>
      <v-row justify="center" >
        <v-col cols="8">
          <h1>ゴチになります</h1>
          <v-select v-model="selectedPrice" :items="priceOptions" label="設定金額"></v-select>
          <h3>今回の設定金額: {{ selectedPrice | numberFormat }}円</h3>
          <br>

          <!-- 料理のジャンル選択 -->
          <v-select v-model="genre" :items="genres" label="ジャンル選択" @change="dynamicMenu0fCuisines"></v-select>
          <!-- 選択したジャンルの料理一覧を動的に表示 -->
          <keep-alive>
            <component :is="selectedTabComponent"
              :french_collection="french_collection"
              :japanese_collection="japanese_collection"
              @check-cuisine="aa"
            ></component>
          </keep-alive>
          <!-- <div v-for="(cuisine, index) in cuisine0fSelectedGenre" :key="index">
            <v-checkbox
              :label="cuisine.name"
              :value="cuisine"
              v-model="listOfOrderedCuisines"
            >
            </v-checkbox>
            <v-img :src="cuisine.image"></v-img>
          </div> -->

          <!-- 選択した料理 -->
          <h4>注文する料理</h4>
          <ul v-for="(cuisine, index) in listOfOrderedCuisines" :key="cuisine.id">
            <!-- <li>{{ index + 1 }}皿目: {{ cuisine.name }}</li> -->
            <!-- cuisine.nameで表示できないのワケわからん -->
            <li>{{ index + 1 }}皿目: {{ cuisine[index].name }}</li>
          </ul>

          <!-- 注文結果 -->
          <div class="my-2">
            <v-btn @click="active" color="warning" dark>STOP</v-btn>
          </div>
          <div v-if="isActive">
            <h4>
              注文金額:{{ totalAmountMoneyOfOrder | numberFormat }}円<br>
              <!-- 差額 -->
              ( {{ totalMoneyDeference | numberFormat }}円 )
            </h4>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FrenchCuisine from './FrenchCuisine';
import JapaneseCuisine from './JapaneseCuisine';
// import ItalianCuisine from './ItalianCuisine';

export default {
  // ジャンル毎に取得したデータを複数propsで受け取る？
  props: {
    french_collection: {
      type: Array,
      default: () => [],
      required: true
    },
    japanese_collection: {
      type: Array,
      default: () => [],
      required: true
    }
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
  filters:{
    numberFormat:function(value){
      return value.toLocaleString()
    }
  },
  methods:{
    active: function() {
      this.isActive = !this.isActive
    },
    aa(value) {
      this.listOfOrderedCuisines.push(value);
    }
    // cuisine0fSelectedGenre: function() {
    //   // 現状では、propsで受け取った複数のcollectionの中の、1つのcollectionを格納してる
    //   let cuisine0fSelectedGenre = [];
    //   if (this.genre === 'French') {
    //     // for (let i = 0; i < this.french_collection.length; i++) {
    //       // let cuisine = this.french_collection[i];
    //       // cuisine0fSelectedGenre.push(cuisine);
    //       // cuisine0fSelectedGenre.push(this.french_collection[i]);
    //     cuisine0fSelectedGenre = this.french_collection;
    //   } else if (this.genre === 'Japanese') {
    //     cuisine0fSelectedGenre = this.japanese_collection;
    //   }
    //   return cuisine0fSelectedGenre;
    // }
  },
  // 動的コンポーネント
  computed: {
    selectedTabComponent: function() {
      return this.genre + "Cuisine";
      // .toLowerCase()
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
  },
  components: {
    FrenchCuisine,
    JapaneseCuisine
  //   ItalianCuisine
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
