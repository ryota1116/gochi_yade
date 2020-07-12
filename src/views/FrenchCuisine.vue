<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h4>フレンチ</h4>
          <div v-for="(cuisine, key) in cuisines1" :key="key">
            <input
              type="checkbox"
              :id="'cuisine' + key"
              :value="{name: cuisine.name, price: cuisine.price}"
              v-model="orderedCuisine"
            >
            <label :for="'cuisine' + key">{{ cuisine.name }}</label>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    cuisines1: {
      type: Object,
      require: true
    }
  },
  data: ()=> {
    return {
      orderedCuisine: []
    }
  }
}
</script>