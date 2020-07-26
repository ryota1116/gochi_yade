<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols=12 sm=8 md=8 lg=8 xl=8>
          <!-- 以下が実装 -->
          <h1>ゴチになります</h1>
          <v-select
            v-model="selectedPrice"
            :items="priceOptions"
            label="設定金額"
            >
            <!-- class="white--text pink darken-2"
            background-color="white--text pink darken-2" -->
          </v-select>
          <h3>設定金額: {{ selectedPrice | numberFormat }}円</h3>
          <br>

          <!-- 料理のジャンル選択 -->
          <v-select
            v-model="selectedGenre"
            :items="genres"
            label="ジャンル選択"
            >
          </v-select>

          <v-card
            class="mx-auto"
          >
            <v-card-title>
              {{ selectedGenre }}
            </v-card-title>
            <v-card-text class="pt-4">
              メニュー
            </v-card-text>
            <v-divider></v-divider>
            <!-- 選択したジャンルの料理一覧を動的に表示 -->
            <v-container
              id="scroll-target"
              style="max-height: 400px"
              class="overflow-y-auto"
            >
              <v-row
                v-scroll:#scroll-target="onScroll"
                align="top"
                justify="center"
              >
                <v-list width="100%" style="text-align: center">
                  <div v-for="(cuisine, index) in cuisine0fSelectedGenre" :key="cuisine.genre-index">
                    <v-col cols=12 sm=6>
                      <v-list-item-content>
                        <v-checkbox
                              :label="cuisine.name"
                              :value="cuisine"
                              v-model="listOfOrderedCuisines"
                        ></v-checkbox>
                        <v-img :src="cuisine.image"></v-img>
                      </v-list-item-content>
                    </v-col>
                  </div>
                </v-list>
              </v-row>
            </v-container>
          </v-card>
          <br>

          <!-- 選択した料理 -->
          <h4>注文する料理</h4>
          <!-- <div justify="center"> -->
          <v-list>
            <v-list-item
              v-for="(cuisine, index) in listOfOrderedCuisines"
              :key="cuisine.id"
              class="text-left"
              >
            <v-list-item-content>
              {{ index + 1 }}皿目:<v-list-item-title v-text="cuisine.name"></v-list-item-title>
              <v-text-field label="Price"></v-text-field>
            </v-list-item-content>
            </v-list-item>
          </v-list>

          <!-- <v-row align="center">
            <ul v-for="(cuisine, index) in listOfOrderedCuisines" :key="cuisine.id" class="text-left">
              <li>{{ index + 1 }}皿目: {{ cuisine.name }} <v-text-field label="Price"></v-text-field></li><br>
            </ul>
          </v-row> -->
          <!-- </div> -->

          <!-- 注文結果 -->
          <div class="my-2">
            <v-btn @click="active">ストップ</v-btn>
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
export default {
  // ジャンル毎に取得したデータを複数propsで受け取る？
  props: {
    cuisines: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data: ()=> {
    return {
      isActive: false,
      priceOptions: [10000, 25000, 35000],
      selectedPrice: "",
      genres: ['French', 'Japanese', 'Italian'],
      genre: "",
      listOfOrderedCuisines: [],
      selectedGenre: null
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
    }
  },
  computed: {
    cuisine0fSelectedGenre: function() {
      return this.cuisines.filter(cuisine => {
        return cuisine.genre == this.selectedGenre
      })
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
