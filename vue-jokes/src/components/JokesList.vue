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
  data() {
      return {
          randomJokes: [],
      }
  },
  created() {
      this.displayRandomJoke();
  },
  methods: {
      displayRandomJoke() {
          fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(data => {this.randomJokes.push(data.value)});

        console.log(this.randomJokes);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
