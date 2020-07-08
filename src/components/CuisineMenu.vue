<template>
  <div>
    <div v-for="(cuisine, index) in cuisines" :key="index">
      <input
        type="checkbox"
        :id="'cuisine' + index"
        :value="cuisine.fields.name.stringValue"
        v-model="orderedCuisine"
      >
      <label :for="'cuisine' + index">{{ cuisine.fields.name.stringValue }}</label>
    </div>
    <span>注文する料理: {{ orderedCuisine }}</span>
  </div>
</template>

<script>
export default {
  // 型指定とrequire true
  props: {
    cuisines: {
      // TODO: 受け取ってるのはオブジェクトやし、Arrayじゃなくておk？
      type: Object
    }
  },
  data: ()=> {
    return {
      orderedCuisine: []
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
