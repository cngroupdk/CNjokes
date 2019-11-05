import jokesDB from '../../jokes.json';

export const getJokesByCategory = (selectedCategory, numberOfPage) => {
  let jokes = jokesDB
  if (selectedCategory !== "all"){
    jokes = jokes.filter(joke =>
      joke.categories.includes(selectedCategory))
  }
  if (numberOfPage !== undefined) {
    const numberOfResults = jokes.length;
    jokes = jokes.slice((numberOfPage-1) * 20, (numberOfPage*20) - 1);
    jokes.push(numberOfResults);
  }
  return jokes;
};