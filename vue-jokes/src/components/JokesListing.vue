<template>
  <b-container class="listing">
    <b-row>
      <b-col sm="3" class="listing-col listing-col1">
        <div class="JokesListing">
          <b-list-group>
            <b-list-group-item
              v-if="isUserLogin"
              variant="dark"
              @click="chosenCategory = 'favourites'"
              :class="{ active: 'favourites' === chosenCategory }"
            >
              favourites
            </b-list-group-item>
            <b-list-group-item
              v-for="(category, index) in categories"
              :key="index"
              variant="dark"
              href="#"
              :class="{ active: category === chosenCategory }"
              @click="chosenCategory = category"
            >
              {{ category }}
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-col>
      <b-col class="listing-col listing-col2">
        <div class="listing-results">
          <ul>
            <li v-for="(joke, id) in jokes" :key="id">
              {{ joke.value }}
              <img
                v-if="isUserLogin && !usersLikedJokesID.includes(joke.id)"
                v-on:click="likeJokeClick(joke.id)"
                src="../imgs/thumb_up.png"
                alt="thumbUp"
              />
              <img
                v-if="usersLikedJokesID.includes(joke.id)"
                v-on:click="dislikeJokeClick(joke.id)"
                src="../imgs/thumb_up_filled.png"
                alt="thumbDown"
              />
            </li>
          </ul>
          <b-pagination
            v-model="pageNumber"
            v-bind:per-page="jokesPerPage"
            v-bind:total-rows="numberOfResults"
            class="sticky-bottom"
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
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
      pageNumber: 1,
      jokesPerPage: 20
    };
  },
  created() {
    this.fetchJokesFromApi();
  },
  computed: {
    ...mapState(["categories", "isUserLogin", "usersLikedJokesID"]),
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
      if (this.chosenCategory === "favourites") {
        api.fetchLikedJokes(
          this.getJokes,
          this.$store.state.loginUser,
          pageNumberReq
        );
      } else {
        api.fetchJokesByCategory(
          this.getJokes,
          this.chosenCategory,
          pageNumberReq
        );
      }
    },
    getJokes(data) {
      this.numberOfResults = data[data.length - 1];
      this.jokes = data.slice(0, data.length - 1);
    },
    likeJokeClick(jokeID) {
      api.addLikedJokes(
        this.likedJokeResponse,
        this.$store.state.loginUser,
        jokeID
      );
    },
    likedJokeResponse(data) {
      if (data.response) {
        api.fetchLikedJokesID(
          this.getLikedJokesID,
          this.$store.state.loginUser
        );
        if (this.chosenCategory === "favourites") {
          this.fetchJokesFromApi();
        }
      }
    },
    getLikedJokesID(response) {
      this.$store.commit("updateUsersLikedJokesID", response);
    },
    dislikeJokeClick(jokeID) {
      api.removeLikedJoke(
        this.likedJokeResponse,
        this.$store.state.loginUser,
        jokeID
      );
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

.listing-col1 {
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
.listing-results {
  margin-left: 5rem;
}
ul {
  list-style-image: url("../imgs/kick.png");
}
</style>
