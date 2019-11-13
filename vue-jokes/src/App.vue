<template>
  <div id="app" class="jokes-app">
    <JokesHeader></JokesHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import JokesHeader from "./components/JokesHeader.vue";

export default {
  name: "app",
  components: {
    JokesHeader,
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
  margin: auto;
  margin-top: 6rem;
  width: 90%;
  max-width: 800px;
}

.jokes-title {
  background: black;
  color: white;
  text-align: center;
  padding: 0.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
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
