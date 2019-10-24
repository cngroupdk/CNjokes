import Vue from "vue";
import Vuex from "vuex";
import jokes from "../components/jokes.json";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    jokesOfflineDatabase: jokes,
    searchInputText: "",
    numberOfJokes: "",
    selectedCategory: ""
  },
  mutations: {
    change(state, searchInputText) {
      state.searchInputText = searchInputText;
    }
  },
  getters: {
    jokesOfflineDatabase: state => state.jokesOfflineDatabase,
    searchInputText: state => state.searchInputText,
    numberOfJokes: state => state.numberOfJokes,
    selectedCategory: state => state.selectedCategory
  }
});
