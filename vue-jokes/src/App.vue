<template>
  <div id="app" class="jokes-app">
    <JokesHeader></JokesHeader>
    <div v-if="chosenTab === 'Search'">
      <div class="jokes-title">
        <h1>{{ title }}</h1>
      </div>
      <JokesSearchForm></JokesSearchForm>
      <JokesSearchList></JokesSearchList>
    </div>
    <div v-if="chosenTab === 'Listing'"></div>
  </div>
</template>

<script>
import JokesHeader from "./components/JokesHeader.vue";
import JokesSearchList from "./components/JokesSearchList.vue";
import JokesSearchForm from "./components/JokesSearchForm.vue";

export default {
  name: "app",
  components: {
    JokesSearchList,
    JokesSearchForm,
    JokesHeader
  },
  data() {
    return {
      title: "Jokes App",
      chosenTab: "Search"
    };
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

.jokes-app {
  margin: 13rem auto 0;
  width: 90%;
  max-width: 500px;
}

.jokes-title {
  background: darkblue;
  color: white;
  text-align: center;
  padding: 1.5rem;
  border-radius: 1rem;
}

.jokes-section {
  background: white;
  color: darkblue;
  margin-top: 1.5rem;
  padding: 1.5rem;
  border-radius: 1rem;
}

/* The switch - the box around the slider */
.switch {
  display: inline-block;
  width: 60px;
  height: 34px;
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
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
