<template>
  <b-list-group class="lp1">
    <b-badge v-if="isEnoughResults"
      >Sorry for your requirements we have just this jokes:</b-badge
    >
    <b-list-group-item v-for="(joke, id) in jokes" :key="id">
      <!-- <img src="../imgs/kick.png"/> -->
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
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { api } from "../modules/api.js";
import { mapState } from "vuex";
export default {
  name: "JokesSearchList",

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

    ...mapState([
      "selectedCategory",
      "numberOfJokes",
      "searchInputText",
      "isUserLogin",
      "usersLikedJokesID"
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group {
  margin-top: 2rem;
}
.list-group-item {
  border-width: 2px;
}
</style>
