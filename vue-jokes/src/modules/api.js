const API_URL = "http://localhost:3000/";

export const api = {
  fetchCategories: callback => {
    fetch(`${API_URL}jokes/categories`)
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
      `${API_URL}jokes/random/${formInputs.numberOfJokes}/${reqCategory}/${reqSearchedText}`
    )
      .then(response => response.json())
      .then(data => callback([...data]));
  },
  fetchJokesByCategory: (callback, category, pageNumber) => {
    fetch(`${API_URL}jokes/bycategory/${category}/${pageNumber}`)
      .then(response => response.json())
      .then(data => callback([...data]));
  },
  createProfile: (callback, userName, userPassword) => {
    const dataToSend = JSON.stringify({
      userName: userName,
      userPassword: userPassword
    });
    fetch(`${API_URL}user/createprofile`, {
      method: "POST",
      json: true,
      body: dataToSend,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => callback(data));
  },
  loginProfile: (callback, userName, userPassword) => {
    const dataToSend = JSON.stringify({
      userName: userName,
      userPassword: userPassword
    });
    fetch(`${API_URL}user/login`, {
      method: "POST",
      json: true,
      body: dataToSend,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => callback(data));
  },
  fetchLikedJokes: (callback, userName, pageNumber) => {
    fetch(`${API_URL}user/getlikedjokes/${userName}/${pageNumber}`)
      .then(response => response.json())
      .then(data => callback(data));
  },
  addLikedJokes: (callback, userName, jokeID) => {
    fetch(`${API_URL}user/addliked/${userName}/${jokeID}`)
      .then(response => response.json())
      .then(data => callback(data));
  },
  removeLikedJoke: (callback, userName, jokeID) => {
    fetch(`${API_URL}user/removeliked/${userName}/${jokeID}`)
      .then(response => response.json())
      .then(data => callback(data));
  },
  fetchLikedJokesID: (callback, userName) => {
    fetch(`${API_URL}user/getlikedjokesID/${userName}`)
      .then(response => response.json())
      .then(data => callback(data));
  }
};
