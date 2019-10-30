<template>
  <div class="jokes-list jokes-section">
    <ul>
      <label v-if="isEnoughResults"
        >Sorry for your requirements we have just this jokes:</label
      >
      <li v-for="(joke, id) in jokes" :key="id">
        {{ joke.value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { api } from "../modules/api.js";
import { mapState } from "vuex";
export default {
  name: "JokesList",

  data() {
    return {
      jokes: []
    };
  },
  created() {
    this.fetchJokesFromApi();
  },
  methods: {
    fetchJokesFromApi() {
      api.fetchJokes(this.getJokes, {
        selectedCategory: this.selectedCategory,
        numberOfJokes: this.numberOfJokes,
        searchInputText: this.searchInputText
      });
    },
    getJokes(data) {
      this.jokes = data;
    }
  },
  watch: {
    selectedCategory: "fetchJokesFromApi",
    numberOfJokes: "fetchJokesFromApi",
    searchInputText: "fetchJokesFromApi"
  },

  computed: {
    isEnoughResults: function() {
      return this.numberOfJokes > this.jokes.length;
    },
    ...mapState(["selectedCategory", "numberOfJokes", "searchInputText"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
