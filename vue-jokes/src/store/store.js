import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
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
    searchInputText: state => state.searchInputText,
    numberOfJokes: state => state.numberOfJokes,
    selectedCategory: state => state.selectedCategory
  }
});
