<template>
  <div>
    <h1>ゴチになります</h1>
    <select v-model="selectedPrice">
      <option v-for="(option, key) in options" :value="option" :key="key">
        {{ option }}
      </option>
    </select>
    <br>
    <span>今回の設定金額: {{ selectedPrice }}</span>

    
    <!-- <input v-model="setPrice"><br>
    <span>今回の設定金額: {{ setPrice }}</span> -->

    <p>メニュー一覧</p>
    <div v-for="(cuisine, key) in cuisines" :key="key">
      <!-- onclickでfunctionでdataを分けて使うとか -->
      <input
        type="checkbox"
        :id="'cuisine' + key"
        :value="{name: cuisine.fields.name.stringValue, price: cuisine.fields.price.integerValue}"
        v-model="orderedCuisine"
      >
      <label :for="'cuisine' + key">{{ cuisine.fields.name.stringValue }}</label>
    </div>

    <p>注文する料理</p>
    <!-- eachで回す -->
    <ul v-for="(cuisine, key) in orderedCuisine" :key="key">
      <li>{{ key + 1 }}皿目: {{ cuisine.name }}</li>
    </ul>
    <!-- 注文結果 -->
    <br>
    <button @click="active">STOP</button>
    <br>
    <div v-if="isActive">
      <h4>
        注文金額:{{ totalAmountMoneyOfOrder }}円<br>
        ( {{ totalMoneyDeference }}円 )
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  // 型指定とrequire true
  props: {
    cuisines: {
      // TODO: Arrayにしてもエラー出る
      type: Object,

    }
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
      options: [5000, 10000, 25000]
    }
  },
  methods:{
    active: function() {
      this.isActive = !this.isActive
    }
  },
  computed: {
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
