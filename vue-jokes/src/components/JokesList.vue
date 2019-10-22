<template>
  <div class="JokesList JokesSection">
    <ul>
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
    formInputs: Object
  },

  data() {
    return {
      randomJokes: [],
      selectedCategory: this.formInputs.selectedCategory,
      numberOfJokes: this.formInputs.numberOfJokes,
      searchInputText: this.formInputs.searchInputText,
      jokesOffline: jokesOfflineDatabase,
      isOfflineModeActive: true
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
      this.loadJokes();
    },

    loadJokes() {
      if (this.isOfflineModeActive) {
        this.getJokeFromDatabase();
      } else if (this.searchInputText.length > 2) {
        this.fetchSearchedJoke();
      } else {
        this.fetchRandomJoke();
      }
    },

    getJokeFromDatabase() {
      const getRandomNumber = maxNumber => {
        return Math.floor(Math.random() * maxNumber);
      };
      const getRandomJokeValue = () => {
        return this.jokesOffline[getRandomNumber(this.jokesOffline.length)]
          .value;
      };

      const getRandomDontRepeatNumber = maxNumber => {
        let randomDontRepeatNumbers = [];
        let nextNumber = getRandomNumber(maxNumber);
        while (randomDontRepeatNumbers.length <= this.numberOfJokes) {
          while (randomDontRepeatNumbers.includes(nextNumber)) {
            nextNumber = getRandomNumber(maxNumber);
          }
          randomDontRepeatNumbers.push(nextNumber);
        }
        return randomDontRepeatNumbers;
      };

      const getJokesFromCategory = () => {
        const filteredArray = this.jokesOffline.filter(joke =>
          joke.categories.includes(this.selectedCategory)
        );
        if (filteredArray.length < this.numberOfJokes) {
          this.randomJokes = filteredArray.map(joke => joke.value); //set some label returning all jokes in category!!
        } else {
          const randomDontRepeatNumbers = getRandomDontRepeatNumber(
            filteredArray.length
          );
          randomDontRepeatNumbers.forEach(randomNumber => {
            this.randomJokes.push(filteredArray[randomNumber].value);
          });
        }
      };

      if (
        this.searchInputText.length === 0 &&
        (this.selectedCategory === "" || this.selectedCategory === "all")
      ) {
        for (let i = 0; i < this.numberOfJokes; i++) {
          this.randomJokes.push(getRandomJokeValue());
        }
      } else if (this.searchInputText.length === 0) {
        getJokesFromCategory();
      }
      // console.log("animal: ", this.jokesOffline.filter(joke => joke.categories.includes("animal")).length);
      // console.log("career: ", this.jokesOffline.filter(joke => joke.categories.includes("career")).length);
      // console.log("celebrity: ", this.jokesOffline.filter(joke => joke.categories.includes("celebrity")).length);
      // console.log("dev: ", this.jokesOffline.filter(joke => joke.categories.includes("dev")).length);
      // console.log("explicit: ", this.jokesOffline.filter(joke => joke.categories.includes("explicit")).length);
      // console.log("fashion: ", this.jokesOffline.filter(joke => joke.categories.includes("fashion")).length);
      // console.log("food: ", this.jokesOffline.filter(joke => joke.categories.includes("food")).length);
      // console.log("history: ", this.jokesOffline.filter(joke => joke.categories.includes("history")).length);
      // console.log("money: ", this.jokesOffline.filter(joke => joke.categories.includes("money")).length);
      // console.log("movie: ", this.jokesOffline.filter(joke => joke.categories.includes("movie")).length);
      // console.log("music: ", this.jokesOffline.filter(joke => joke.categories.includes("music")).length);
      // console.log("political: ", this.jokesOffline.filter(joke => joke.categories.includes("political")).length);
      // console.log("religion: ", this.jokesOffline.filter(joke => joke.categories.includes("religion")).length);
      // console.log("science: ", this.jokesOffline.filter(joke => joke.categories.includes("science")).length);
      // console.log("sport: ", this.jokesOffline.filter(joke => joke.categories.includes("sport")).length);
      // console.log("travel: ", this.jokesOffline.filter(joke => joke.categories.includes("travel")).length);
      //console.log("all: ", this.jokesOffline.filter(joke => joke.categories.length===0).length);
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
