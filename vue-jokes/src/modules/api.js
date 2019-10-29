const API_URL = "http://api.chucknorris.io/jokes/";

export const api = {
  fetchCategories: callback => {
    fetch(`${API_URL}categories`, {
        mode: 'no-cors',
    })
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
      `${API_URL}${formInputs.numberOfJokes}/${reqCategory}/${reqSearchedText}`
    , {
        mode: 'no-cors',
    })
      .then(response => response.json())
      .then(data => callback([...data]));
  }
};
