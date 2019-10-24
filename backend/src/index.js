import express from 'express';
import jokesDB from './jokes.json';

const app = express();
let cors = require('cors');
app.use(cors());
const categories = [
  "all",
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel"
  ];

const getJokesFromDatabase = (objOfParams) => {
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

  const getJokesByCategory = jokes => {
    if (selectedCategory === "all") {
      return jokes;
    } else {
      return jokes.filter(joke =>
        joke.categories.includes(selectedCategory)
      );
    }
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

  let filteredJokes = getJokesByCategory(jokesDB);
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
  

// app.get('/', async (req, res) => {
//   const thing = await Promise.resolve({ one: 'two' }) // async/await!
//     .catch(e => res.json({ error: e.message }));
//   return res.json({ ...thing, hello: 'world' }); // object-rest-spread!
// });

app.get('/jokes/categories', async (req, res) => {
  return res.json(categories); // object-rest-spread!
});

app.get('/jokes/:numberOfJokes/:selectedCategory/:searchInputText', async (req, res) => {
  const thing = await Promise.resolve(getJokesFromDatabase(req.params))
    .catch(e => res.json({ error: e.message }));
  return res.json(thing);

  //return res.json(getJokesFromDatabase(req.params.numberOfJokes, req.params.category, req.params.searchWord));
});


  

const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    console.error(err);
  }

  if (__DEV__) {
    // webpack flags!
    console.log('> in development');
  }

  console.log(`> listening on port ${port}`);
});