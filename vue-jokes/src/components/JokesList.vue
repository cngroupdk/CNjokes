<template>
  <div class="jokes-list jokes-section">
    <ul>
      <li v-for="(joke, index) in jokes" :key="index">
        {{ joke }}
      </li>
    </ul>
  </div>
</template>

<script>
import { api } from "../modules/api.js";
export default {
  name: "JokesList",
  props: {
    formInputs: Object
  },

  data() {
    return {
      jokes: []
    };
  },
  created() {
    api.fetchJokes(this.getTextFromJokes, this.formInputs);
  },

  watch: {
    formInputs: "handleChangeProps"
  },

  methods: {
    handleChangeProps() {
      this.selectedCategory = this.formInputs.selectedCategory;
      this.numberOfJokes = this.formInputs.numberOfJokes;
      this.searchInputText = this.formInputs.searchInputText;
      this.jokes = [];
      api.fetchJokes(this.getTextFromJokes, this.formInputs);
    },
    getTextFromJokes(data) {
      this.jokes = data.map(joke => joke.value);
    }
  }
};
</script>

<style scoped>
</style>
