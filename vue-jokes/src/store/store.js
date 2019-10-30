import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    searchInputText: "",
    numberOfJokes: 1,
    selectedCategory: "",
    categories: []
  },
  mutations: {
    updateSearchInputText(state, searchInputText) {
      state.searchInputText = searchInputText;
    },
    updateNumberOfJokes(state, numberOfJokes) {
      state.numberOfJokes = numberOfJokes;
    },
    updateSelectedCategory(state, selectedCategory) {
      state.selectedCategory = selectedCategory;
    },
    updateCategories(state, categories) {
      state.categories = categories;
    }
  }
});
