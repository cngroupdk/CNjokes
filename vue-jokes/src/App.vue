<template>
  <div id="app" class="JokesApp">
      <header>
          <h1>{{ title }}</h1>
      </header>
    <JokesForm v-on:searchButtonClicked="searchButtonClicked"></JokesForm>
    <JokesList v-if="isSearchedButtonClicked" v-bind:inputsArray="inputsArray"></JokesList>
  </div>
</template>

<script>
import JokesList from './components/JokesList.vue'
import JokesForm from './components/JokesForm.vue'

export default {
  name: 'app',
  components: {
    JokesList,
    JokesForm,
  },
  data() {
      return {
          title: 'Jokes App',
          isSearchedButtonClicked: false,
          inputsArray: [],
      }
  },
  methods: {
      searchButtonClicked (inputs) {
          this.inputsArray = inputs;
          this.isSearchedButtonClicked = !this.isSearchedButtonClicked;
      },
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: lightseagreen;
}

.JokesApp {
    margin: 3rem auto;
    width: 90%;
    max-width: 500px;
}

.JokesApp header {
    background: darkblue;
    color: white;
    text-align: center;
    padding: 1.5rem;
    border-radius: 1rem;
}

.JokesSection {
    background: white;
    color: darkblue;
    margin-top: 1.5rem;
    padding: 1.5rem;
    border-radius: 1rem;
}
</style>
