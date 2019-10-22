<template>
  <div id="app" class="JokesApp">
    <label class="switch">
      <input v-model="isOfflineModeActive" type="checkbox" />
      <span class="slider round"></span>
    </label>
    <header>
      <h1>{{ title }}</h1>
    </header>
    <JokesForm v-on:searchButtonClicked="searchButtonClicked"></JokesForm>
    <JokesList
      v-if="isSearchedButtonClicked"
      v-bind:formInputs="formInputs"
      v-bind:isOfflineModeActive="isOfflineModeActive"
    ></JokesList>
  </div>
</template>

<script>
import JokesList from "./components/JokesList.vue";
import JokesForm from "./components/JokesForm.vue";

export default {
  name: "app",
  components: {
    JokesList,
    JokesForm
  },
  data() {
    return {
      title: "Jokes App",
      formInputs: {},
      isSearchedButtonClicked: false,
      isOfflineModeActive: false
    };
  },
  methods: {
    searchButtonClicked(inputs) {
      this.isSearchedButtonClicked = true;
      this.formInputs = inputs;
    }
  }
};
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

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
