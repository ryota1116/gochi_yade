<template>
  <div>
    <div v-for="(cuisine, index) in cuisines" :key="index">
      <!-- :value="cuisine.fields.name.stringValue"とすれば、orderCuisineで料理名だけ表示できるけど。。 -->
      <!-- :value="[cuisine.fields.name.stringValue, cuisine.fields.price.integerValue]" -->
      <!-- onclickでfunctionでdataを分けて使うとか -->
      <input
        type="checkbox"
        :id="'cuisine' + index"
        :value="{name: cuisine.fields.name.stringValue, price: cuisine.fields.price.integerValue}"
        v-model="orderedCuisine"
      >
      <label :for="'cuisine' + index">{{ cuisine.fields.name.stringValue }}</label>
    </div>
    <p>注文する料理</p>
    <!-- eachとかで回す -->
    <ul v-for="(cuisine, index) in orderedCuisine" :key="index">
      <li>{{ cuisine.name }}</li>
    </ul>
    <br>
    <button>STOP</button>
  </div>
</template>

<script>
export default {
  // 型指定とrequire true
  props: {
    cuisines: {
      // TODO: 受け取ってるのはオブジェクトやし、Arrayじゃなくておk？
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
      ]
    }
  },
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
