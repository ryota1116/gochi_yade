<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1>ゴチになります</h1>
          <v-select v-model="selectedPrice" :items="options" label="設定金額"></v-select>
          <h3>今回の設定金額: {{ selectedPrice }}円</h3>
          <br>
          <h4>メニュー一覧</h4>
          <!-- v-ifで表示するコンポーネントを切り替える -->
          <v-select v-model="currentTab" :items="genres" label="メニュー"></v-select>
          <component :is="selectedTabComponent"></component>

          <p>注文する料理</p>
          <ul v-for="(cuisine, key) in orderedCuisine" :key="key">
            <li>{{ key + 1 }}皿目: {{ cuisine.name }}</li>
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
import FrenchCuisine from './FrenchCuisine';
import JapaneseCuisine from './JapaneseCuisine';
import ItalianCuisine from './ItalianCuisine';

export default {
  props: {
    cuisines: [],
  },
  components: {
    FrenchCuisine,
    JapaneseCuisine,
    ItalianCuisine
  },
  data: ()=> {
    return {
      orderedCuisine: [
        // 下記はコメントアウトで良さそう
        // {
        //   name: '',
        //   price: ''
        // }
      ],
      isActive: false,
      selectedPrice: "",
      options: [5000, 10000, 25000],
      cuisineGenre: "",

      genres: ['French', 'Japanese', 'Italian'],
      currentTab: "",
    }
  },
  methods:{
    active: function() {
      this.isActive = !this.isActive
    }
  },
  computed: {
    selectedTabComponent: function() {
      return this.currentTab + "Cuisine";
      // .toLowerCase()
    },
    totalAmountMoneyOfOrder: function() {
      const total = this.orderedCuisine.reduce((i, next) => i += Number(next.price), 0);
      return total;
    },
    totalMoneyDeference: function() {
      const total = this.orderedCuisine.reduce((i, next) => i += Number(next.price), 0);
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
