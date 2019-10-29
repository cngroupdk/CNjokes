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
    fetch(`${API_URL}/search?query=${query}`)
      .then(response => response.json())
      .then(data => {
        callback({ ...data });
      });
  },
  fetchAmountOfJokesByCategory: (callback, category, numberOfJokes) => {
    if (numberOfJokes === 0) {
      callback([], false);
      return;
    }

    let jokes = [];
    let jokesLoaded = 0;
    let apiUrl = "";

    if (category === "all") {
      apiUrl = `${API_URL}/random`;
    } else {
      apiUrl = `${API_URL}/random?category=${category}`;
    }

    for (let i = 0; i < numberOfJokes; i++) {
      fetch(`${apiUrl}`)
        .then(response => response.json())
        .then(data => {
          jokes.push(data.value);
          jokesLoaded++;
          if (jokesLoaded === numberOfJokes) {
            const uniqueJokes = [...new Set(jokes)];
            const hasDuplicateJokes =
              uniqueJokes.length === numberOfJokes ? false : true;
            callback(uniqueJokes, hasDuplicateJokes);
          }
        });
    }
  },
  fetchSthElse: () => {} // add other endpoints
};
