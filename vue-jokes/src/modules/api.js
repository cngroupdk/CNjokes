const API_URL = "http://localhost:3000/jokes/";

export const api = {
  fetchCategories: callback => {
    fetch(`${API_URL}categories`)
      .then(response => response.json())
      .then(data => callback(data));
  },
  fetchJokes: (callback, formInputs) => {
    const reqCategory =
      formInputs.selectedCategory === "" ? "all" : formInputs.selectedCategory;
    const reqSearchedText =
      formInputs.searchInputText === ""
        ? "empty_search_input"
        : formInputs.searchInputText;
    fetch(
      `${API_URL}random/${formInputs.numberOfJokes}/${reqCategory}/${reqSearchedText}`
    )
      .then(response => response.json())
      .then(data => callback([...data]));
  },
  fetchJokesByCategory: (callback, category, pageNumber) => {
    fetch(`${API_URL}bycategory/${category}/${pageNumber}`)
      .then(response => response.json())
      .then(data => callback([...data]));
  }
};
