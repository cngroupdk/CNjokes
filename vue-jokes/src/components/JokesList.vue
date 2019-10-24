<template>
  <div class="JokesList JokesSection">
    <ul>
      <label v-if="isNotEnoughResults"
        >Sorry for your requirements we have just this jokes:</label
      >
      <li v-for="randomJoke in randomJokes" v-bind:key="randomJoke.index">
        {{ randomJoke }}
      </li>
    </ul>
  </div>
</template>

<script>
import jokesOfflineDatabase from "./jokes.json";
export default {
  name: "JokesList",
  props: {
    formInputs: Object,
    isOfflineModeActive: Boolean
  },

  data() {
    return {
      randomJokes: [],
      selectedCategory: this.formInputs.selectedCategory,
      numberOfJokes: this.formInputs.numberOfJokes,
      searchInputText: this.formInputs.searchInputText,
      jokesOffline: jokesOfflineDatabase,
      isNotEnoughResults: false
    };
  },
  created() {
    this.loadJokes();
  },

  watch: {
    formInputs: "handleChangeProps"
  },

  methods: {
    handleChangeProps() {
      this.selectedCategory = this.formInputs.selectedCategory;
      this.numberOfJokes = this.formInputs.numberOfJokes;
      this.searchInputText = this.formInputs.searchInputText;
      this.randomJokes = [];
      this.isNotEnoughResults = false;
      this.loadJokes();
    },

    loadJokes() {
      if (this.isOfflineModeActive) {
        this.getJokeFromDatabase();
      } else {
        this.fetchJokes();
      }
    },

    getJokeFromDatabase() {
      const getRandomNumber = maxNumber => {
        return Math.floor(Math.random() * maxNumber);
      };

      const getRandomDontRepeatNumbers = maxNumber => {
        let randomDontRepeatNumbers = [];
        let nextNumber = getRandomNumber(maxNumber);
        while (randomDontRepeatNumbers.length < this.numberOfJokes) {
          while (randomDontRepeatNumbers.includes(nextNumber)) {
            nextNumber = getRandomNumber(maxNumber);
          }
          randomDontRepeatNumbers.push(nextNumber);
        }
        return randomDontRepeatNumbers;
      };

      const getJokesByCategory = jokes => {
        if (this.selectedCategory === "" || this.selectedCategory === "all") {
          return jokes;
        } else {
          return jokes.filter(joke =>
            joke.categories.includes(this.selectedCategory)
          );
        }
      };

      const getJokesBySearch = jokes => {
        if (this.searchInputText.length === 0) {
          return jokes;
        } else {
          const searchedText = new RegExp(this.searchInputText, "gi");
          return jokes.filter(joke => joke.value.match(searchedText));
        }
      };

      const isEnoughResults = jokes => {
        return jokes.length <= this.numberOfJokes;
      };

      let filteredJokes = getJokesByCategory(this.jokesOffline);
      filteredJokes = getJokesBySearch(filteredJokes);
      if (isEnoughResults(filteredJokes)) {
        this.isNotEnoughResults = true;
        this.randomJokes = filteredJokes.map(joke => joke.value); //set some label returning all jokes in category!!
      } else {
        const randomDontRepeatNumbers = getRandomDontRepeatNumbers(
          filteredJokes.length
        );
        randomDontRepeatNumbers.forEach(randomNumber => {
          this.randomJokes.push(filteredJokes[randomNumber].value);
        });
      }
    },

    fetchRandomJoke() {
      let url;

      if (this.selectedCategory === "" || this.selectedCategory === "all") {
        url = "https://api.chucknorris.io/jokes/random";
      } else {
        url = `https://api.chucknorris.io/jokes/random?category=${this.selectedCategory}`;
      }

      for (let i = 0; i < this.numberOfJokes; i++) {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            this.randomJokes.push(data.value);
          });
      }
    },
    fetchSearchedJoke() {
      let url = `https://api.chucknorris.io/jokes/search?query=${this.searchInputText}`;
      fetch(url)
        .then(res => res.json())
        .then(
          data =>
            (this.randomJokes = [...data.result]
              .map(joke => joke.value)
              .slice(0, this.numberOfJokes))
        );
    },
    fetchJokes() {
      const reqCategory = this.selectedCategory === '' ? 'all' : this.selectedCategory;
      const reqSearchedText = this.searchInputText === '' ? 'chu' : this.searchInputText;
      let url = `http://localhost:3000/jokes/${this.numberOfJokes}.${reqCategory}.${reqSearchedText}`;
      console.log(url);
      fetch(url)
      .then(res => res.json())
      .then(
        data => this.randomJokes = [...data].map(joke => joke.value)
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
