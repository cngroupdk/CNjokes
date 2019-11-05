<template>
  <header class="JokesHeader">
    <div class="login">
      <JokesSignUpWindow
        v-if="!this.$store.state.isUserLogin"
      ></JokesSignUpWindow>
      <JokesLoginWindow
        v-if="!this.$store.state.isUserLogin"
      ></JokesLoginWindow>
      <button
        class="logout-button"
        v-if="this.$store.state.isUserLogin"
        v-on:click="logout"
        type="button"
      >
        {{ this.$store.state.loginUser }} <br />LOGOUT
      </button>
    </div>
    <nav>
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ ChosenTab: tab === chosenTab }"
          @click="$store.commit('updateChosenTab', tab)"
        >
          {{ tab }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import JokesLoginWindow from "./JokesLoginWindow.vue";
import JokesSignUpWindow from "./JokesSignUpWindow.vue";

export default {
  name: "JokesHeader",
  components: {
    JokesSignUpWindow,
    JokesLoginWindow
  },
  data() {
    return {
      tabs: ["Search", "Listing"]
    };
  },
  computed: {
    chosenTab: {
      get() {
        return this.$store.state.chosenTab;
      }
    }
  },
  methods: {
    logout() {
      this.$store.commit("updateLoginUser", "");
    }
  }
};
</script>

<style>
.JokesHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: darkblue;
  padding: 5rem 3rem 0;
}

.JokesHeader ul {
  list-style: none;
  display: flex;
}

.JokesHeader li {
  background: lightblue;
  font-size: 2rem;
  padding: 1rem 1rem 0;
  margin-right: 0.7rem;
  border-radius: 0.3rem 0.3rem 0 0;
  position: relative;
}

.JokesHeader li:not(.ChosenTab):hover {
  cursor: pointer;
}

.JokesHeader li.ChosenTab {
  background: lightseagreen;
  color: black;
  font-weight: 600;
  z-index: 100;
}

.JokesHeader li.ChosenTab:before {
  border-color: transparent lightseagreen transparent transparent;
}

.JokesHeader li.ChosenTab:after {
  border-color: transparent transparent transparent lightseagreen;
}

.JokesHeader li:before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: -1.18rem;
  border-width: 3.3rem 1.3rem 0 0;
  border-color: transparent lightblue transparent transparent;
  border-style: solid;
}

.JokesHeader li:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  right: -1.18rem;
  border-width: 3.3rem 0 0 1.3rem;
  border-color: transparent transparent transparent lightblue;
  border-style: solid;
}

.logout-button {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  margin: 0;
  border: none;
  cursor: pointer;
  width: 15%;
  float: right;
}
</style>
