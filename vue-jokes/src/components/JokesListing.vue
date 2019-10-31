<template>
  <div class="listing">
    <div class="listing-col listing-col1">
      <header class="JokesListing">
        <nav>
          <ul>
            <li
              v-for="(category, index) in categories"
              :key="index"
              :class="{ active: category === chosenCategory }"
              @click="chosenCategory = category"
            >
              {{ category }}
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <div class="listing-col listing-col2">
      <ul>
        <li v-for="(joke, id) in jokes" :key="id">
          {{ joke.value }}
        </li>
      </ul>
      <input
        v-model.number="pageNumber"
        type="number"
        class="jokes-listing-page-number"
        step="1"
        min="1"
        v-bind:max="maxNumberOfPages"
        value="1"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { api } from "../modules/api.js";

export default {
  name: "JokesListing",
  data() {
    return {
      chosenCategory: "all",
      jokes: [],
      numberOfResults: 1,
      pageNumber: 1
    };
  },
  created() {
    this.fetchJokesFromApi();
  },
  computed: {
    ...mapState(["categories"]),
    maxNumberOfPages: function() {
      return Math.floor(this.numberOfResults / 20) + 1;
    }
  },
  watch: {
    chosenCategory: "fetchJokesFromApi",
    pageNumber: "fetchJokesFromApi"
  },
  methods: {
    fetchJokesFromApi() {
      if (this.pageNumber > this.maxNumberOfPages) {
        this.pageNumber = this.maxNumberOfPages;
      }
      let pageNumberReq = this.pageNumber;
      if (this.pageNumber === "") {
        pageNumberReq = 1;
      }
      api.fetchJokesByCategory(
        this.getJokes,
        this.chosenCategory,
        pageNumberReq
      );
    },
    getJokes(data) {
      this.numberOfResults = data[data.length - 1];
      this.jokes = data.slice(0, data.length - 1);
    }
  }
};
</script>

<style>
.jokes-app {
  max-width: 1500px;
}

.listing {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.listing-col {
  background: white;
  border-radius: 20px;
  min-height: 70vh;
}

. .listing-col1 {
  width: 25%;
}

.listing-col2 {
  width: 65%;
}

.JokesListing body {
  margin: 0;
}

.JokesListing ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
  height: 100%;
  overflow: auto;
}

.JokesListing li {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

.JokesListing li.active {
  background-color: #4caf50;
  color: white;
}

.JokesListing li:hover:not(.active) {
  background-color: #555;
  color: white;
}
</style>
