const API_URL = "https://api.chucknorris.io/jokes";

export const api = {
  fetchCategories: callback => {
    fetch(`${API_URL}/categories`)
      .then(response => response.json())
      .then(data => {
        callback(["all", ...data]);
      });
  },
  fetchRandomJoke: callback => {
    fetch(`${API_URL}/random`)
      .then(response => response.json())
      .then(data => {
        callback({ ...data });
      });
  },
  fetchSearchedJokes: (callback, query) => {
    console.log(callback, query);
    fetch(`${API_URL}/search?query=${query}`)
      .then(response => response.json())
      .then(data => {
        callback({ ...data });
      });
  },
  fetchSthElse: () => {} // add other endpoints
};
