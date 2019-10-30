<template>
  <div class="JokesForm jokes-section">
    <form  @submit.prevent="callShowJokes">
      <div class="JokesForm__Part">
        <select
          @change="changedSelect($event)"
          name="jokes-categories"
          id="jokes-categories"
        >
          <option value="" disabled selected>Select your category</option>
          <option
            v-for="(category, index) in categories"
            :key="index"
            :value="category"
            >{{ category }}</option
          >
        </select>
        <input
          v-model.number="numberOfJokes"
          type="number"
          class="JokesForm__Number"
          step="1"
          min="1"
          value="1"
        />
      </div>
      <div class="JokesForm__Part">
        <input
          v-model="searchInputText"
          placeholder="Search text..."
          type="text"
          class="JokesForm__Search"
        />
        <button type="submit">
          {{ getSearchButtonText }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { api } from "../modules/api.js";
export default {
  name: "JokesForm",
  data() {
    return {
      categories: [],
      selectedCategory: "",
      numberOfJokes: 1,
      searchInputText: "",
      clearButton: false
    };
  },
  created() {
    api.fetchCategories(this.setCategories);
  },
  methods: {
    setCategories(data) {
      this.categories = data;
    },
    changedSelect(event) {
      this.selectedCategory = event.target.value;
    },
    callShowJokes() {
      this.$emit("searchButtonClicked", {
        selectedCategory: this.selectedCategory,
        numberOfJokes: this.numberOfJokes,
        searchInputText: this.searchInputText
      });
    }
  },
  computed: {
    getSearchButtonText() {
      if (this.numberOfJokes > 1 && this.searchInputText.length > 2) {
        return "Search for jokes";
      } else if (this.searchInputText.length > 2) {
        return "Search for joke"
      } else if (this.numberOfJokes > 1 && this.searchInputText.length < 3) {
        return "Get random jokes";
      } else {return "Get random joke"};
    }
  }
};
</script>

<style scoped>
.JokesForm__Part * {
  font-size: 1.2rem;
  padding: 0.2rem;
  border: 0.1rem solid darkblue;
  border-radius: 0.6rem;
}

.JokesForm__Part:first-child select {
  width: 75%;
  margin-right: 5%;
}
.JokesForm__Part:first-child input {
  width: 20%;
  text-align: center;
}
.JokesForm__Part:last-child input {
  width: 100%;
  margin-top: 1rem;
}
.JokesForm__Part button {
  background: darkblue;
  color: white;
  margin-top: 1rem;
  padding: 0.2rem 0.6rem;
}
.JokesForm__Part button:hover {
  cursor: pointer;
}
</style>
