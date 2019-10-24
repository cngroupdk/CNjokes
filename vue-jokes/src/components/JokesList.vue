<template>
  <div class="JokesList JokesSection">
    <ul>
      <!-- <label v-if="isNotEnoughResults"
        >Sorry for your requirements we have just this jokes:</label
      > -->
      <li v-for="joke in jokes" v-bind:key="joke.index">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
