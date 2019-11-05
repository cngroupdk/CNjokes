import { getJokesByCategory } from './getJokesByCategory.js'

export const getRandomiseJokesFromDatabase = (objOfParams) => {
  let {numberOfJokes, selectedCategory, searchInputText} = objOfParams;
  numberOfJokes = parseInt(numberOfJokes);
  let jokesResults = [];

  const getRandomNumber = maxNumber => {
    return Math.floor(Math.random() * maxNumber);
  };

  const getRandomDontRepeatNumbers = maxNumber => {
    let randomDontRepeatNumbers = [];
    let nextNumber = getRandomNumber(maxNumber);
    while (randomDontRepeatNumbers.length < numberOfJokes) {
      while (randomDontRepeatNumbers.includes(nextNumber)) {
        nextNumber = getRandomNumber(maxNumber);
      }
      randomDontRepeatNumbers.push(nextNumber);
    }
    return randomDontRepeatNumbers;
  };

  

  const getJokesBySearch = jokes => {
    if (searchInputText === 'empty_search_input') {
      return jokes;
    } else {
      const searchedText = new RegExp(searchInputText, "gi");
      return jokes.filter(joke => joke.value.match(searchedText));
    }
  };

  const isEnoughResults = jokes => {
    return jokes.length <= numberOfJokes;
  };

  let filteredJokes = getJokesByCategory(selectedCategory);
  filteredJokes = getJokesBySearch(filteredJokes);
  if (isEnoughResults(filteredJokes)) {
    jokesResults = filteredJokes;
  } else {
    const randomDontRepeatNumbers = getRandomDontRepeatNumbers(
      filteredJokes.length
    );
    randomDontRepeatNumbers.forEach(randomNumber => {
      jokesResults.push(filteredJokes[randomNumber]);
    });
  }
  return jokesResults;
}