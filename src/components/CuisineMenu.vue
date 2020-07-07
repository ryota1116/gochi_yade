<template>
  <div>
    <div v-for="(menu, index) in menus" :key="index">
      <input
        type="checkbox"
        v-model="orderedCuisine"
        :id="'menu' + index"
        :value="menu"
      >
      <label :for="'menu' + index">{{ menu }}</label>
    </div>
    <span>注文する料理: {{ orderedCuisine }}</span>
  </div>
</template>

<script>
export default {
  // 型指定とrequire true
  props: {
    orderedCuisine: {
      type: Array,
      default: () => []
    }
  },
  // name: 'CuisineMenu',
  data: ()=> {
    return {
      menus: ['3色野菜のムーステリーヌ', '鴨肉のロティ', 'ラムチョップのソテー ~バルサミコと赤ワインのソース~', '神戸牛のフィレステーキ']
      // orderedCuisine: []
    }
  }
  // methods: {
  //   order() {
  //     this.$emit('select-menu', this.orderedCuisine)
  //   }
  // }
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
