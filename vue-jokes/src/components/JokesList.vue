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
export default {
  name: 'JokesList',
  props: {
      formInputs: Object,
  },

  data() {
      return {
          randomJokes: [],
          selectedCategory: this.formInputs.selectedCategory,
          numberOfJokes: this.formInputs.numberOfJokes,
          searchInputText: this.formInputs.searchInputText
      }
  },
  created() {
      (this.searchInputText.length>2) ? this.displaySearchedJoke() : this.displayRandomJoke();
  },

  
  methods: {
      displayRandomJoke() {
            let url;

            if(this.selectedCategory==="" || this.selectedCategory==="all") {
                url ='https://api.chucknorris.io/jokes/random';
            }
            else {
                url = `https://api.chucknorris.io/jokes/random?category=${this.selectedCategory}`;
            }

            for (let i = 0; i < this.numberOfJokes; i++) {

                fetch(url)
                    .then(res => res.json())
                    .then(data => {this.randomJokes.push(data.value)});
            }

        },
        displaySearchedJoke() {
            let url = `https://api.chucknorris.io/jokes/search?query=${this.searchInputText}`;
            fetch(url)
                .then(res => res.json())
                .then(data => this.randomJokes = [...data.result].map(joke => joke.value).slice(0,this.numberOfJokes));
        }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
