<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h4>日本料理</h4>
          <!-- {{ frenchCuisines }}
          <div v-for="(cuisine, key) in frenchCuisines" :key="key">
            <input
              type="checkbox"
              :id="'cuisine' + key"
              :value="{name: cuisine.name, price: cuisine.price}"
              v-model="orderedCuisine"
            >
            <label :for="'cuisine' + key">{{ cuisine.name }}</label>
          </div> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    frenchCuisines: []
  },
  data: ()=> {
    return {
      orderedCuisine: []
    }
  }
}
</script>