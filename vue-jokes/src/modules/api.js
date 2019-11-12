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
    console.log(`${API_URL}bycategory/${category}/${pageNumber}`);
    fetch(`${API_URL}bycategory/${category}/${pageNumber}`)
      .then(response => response.json())
      .then(data => callback([...data]));
  },
  createProfile: (callback, userName, userPassword) => {
    fetch(`${API_URL}createprofile/${userName}/${userPassword}`)
      .then(response => response.json())
      .then(data => callback(data));
  },
  loginProfile: (callback, userName, userPassword) => {
    fetch(`${API_URL}login/${userName}/${userPassword}`)
      .then(response => response.json())
      .then(data => callback(data));
  },
  fetchLikedJokes: (callback, userName, pageNumber) => {
    console.log("url",`${API_URL}getlikedjokes/${userName}/${pageNumber}`)
    fetch(`${API_URL}getlikedjokes/${userName}/${pageNumber}`)
      .then(response => response.json())
      .then(data => callback(data));
  },
  addLikedJokes: (callback, userName, jokeID) => {
    fetch(`${API_URL}addliked/${userName}/${jokeID}`)
      .then(response => response.json())
      .then(data => callback(data));
  },
  removeLikedJoke: (callback, userName, jokeID) => {
    fetch(`${API_URL}removeliked/${userName}/${jokeID}`)
      .then(response => response.json())
      .then(data => callback(data));
  },
  fetchLikedJokesID: (callback, userName) => {
    console.log("url",`${API_URL}getlikedjokes/${userName}`)
    fetch(`${API_URL}getlikedjokesID/${userName}`)
      .then(response => response.json())
      .then(data => callback(data));
  },
};
