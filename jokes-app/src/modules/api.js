const API_URL = "https://api.chucknorris.io/jokes/";

export const api = {
  fetchCategories: callback => {
    fetch(`${API_URL}/categories`)
      .then(response => response.json())
      .then(data => {
        callback(["all", ...data]);
      });
  },
  fetchSthElse: () => {} // add other endpoints
};
