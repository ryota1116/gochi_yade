<template>
  <div>
    <div v-for="(cuisine, index) in this.french_collection" :key="index">
      <v-checkbox
        :label="cuisine.name"
        :value="cuisine"
        v-model="cuisine0fSelectedGenre"
        v-on:click="clickCheckbox"
      >
      </v-checkbox>
      <v-img :src="cuisine.image"></v-img>
    </div>
  </div>
</template>

<script>
  export default {
  // ジャンル毎に取得したデータを各componentで受け取る？
    props: {
      french_collection: {
        type: Array,
        default: () => [],
        required: true
      }
    },
    data: ()=> {
      return {
        cuisine0fSelectedGenre: []
      }
    },
    methods: {
      clickCheckbox() {
        this.$emit('check-cuisine', this.cuisine0fSelectedGenre)
      }
    }
  }
</script>