import express from 'express';
import jokesDB from './jokes.json';
//import users from './users/usersDB.json';

const app = express();
let cors = require('cors');
app.use(cors());
const bcrypt = require('bcrypt');
const fs = require('fs');
let users  = require('./users/usersDB.json');
users = Array.from(users);
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

  const getJokesByCategory = (selectedCategory, numberOfPage) => {
    let jokes = jokesDB;
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

const getRandomiseJokesFromDatabase = (objOfParams) => {
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
const isUserInDB = userName => {
  return users.map(user => user.userName).includes(userName);
}

const getUserByName = userName => {
  return users.find(user => user.userName === userName)
}

const getUserIndexByName = userName => {
  return users.findIndex(user => user.userName === userName);
}

// async function hashPassword (userPassword) {
//   const saltRounds = 5;

//   const hashedPassword = await new Promise((resolve, reject) => {
//     bcrypt.hash(userPassword, saltRounds, function(err, hash) {
//       err ? reject(err) : resolve(hash)
//     });
//   })
//   console.log(hashedPassword);
//   return hashedPassword;
// }

const saveProfile = () => {
  var path = require('path');
  const jsonString = (JSON.stringify(users, null, 2))
  fs.writeFile(path.join(__dirname, '../src/users/usersDB.json'), jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
  })
}

const createProfile = loginParams => {
  const userName = loginParams.userName;
  const userPassword = loginParams.userPassword;
  if(isUserInDB(userName)) {
    return { response: false };
  }
  else {
    const hashedPassword = bcrypt.hashSync(userPassword, 5);
    users.push({ userName:userName, userPassword: hashedPassword, likedJokes: [] })
    saveProfile(userName,hashedPassword);
    return { response: true };
  }
}

const loginProfile = loginParams => {
  const loginUser = getUserByName(loginParams.userName);
  console.log(loginUser)
  if (loginUser !== undefined) {
    if(bcrypt.compareSync(loginParams.userPassword, loginUser.userPassword)) { 
      return { response: true };
    }
    else {
      return { response: false};
    }
  }
  else {
    return { response: false };
  }
}

const getLikedJokes = userName => {
  console.log(userName)
  const loginUserLikedJokesID = getUserByName(userName).likedJokes;
  return loginUserLikedJokesID.map(likeJokeID => {
     return jokesDB.find(joke => joke.id === likeJokeID)
   });
};

const addLikedJokeToUser = (userName, jokeID) => {
  const userIndex = getUserIndexByName(userName);
  users[userIndex].likedJokes.push(jokeID);
  saveProfile();
}

const removeLikedJokeFromUser = (userName, jokeID) => {
  const userIndex = getUserIndexByName(userName);
  const newLikedJokes = users[userIndex].likedJokes.filter(likeJokeID => likeJokeID !== jokeID)
  users[userIndex].likedJokes = newLikedJokes;
  saveProfile();
}

  // if (isUserInDB(loginParams.userName)) {
  //   const user
  //   if (bcrypt.compareSync(loginParams.userPassword, )) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

// const creatingFile = loginParams => {
//   var path = require('path');

//   const jsonString = JSON.stringify(loginParams);
//   console.log(jsonString);
//   fs.writeFile(path.join(__dirname, '../src/users/usersDB.json'), jsonString, err => {
//     if (err) {
//         console.log('Error writing file', err)
//     } else {
//         console.log('Successfully wrote file')
//     }
//   })
// }

// const getFromUsersDB = () => {
//   fs.readFile('./users/usersDB.json', 'utf8', (err, jsonString) => {
//     if (err) {
//         console.log("Error reading file from disk:", err)
//         return
//     }
//     try {
//         return JSON.parse(jsonString)
// } catch(err) {
//         console.log('Error parsing JSON string:', err)
//     }
//   })
// }


app.get('/jokes/categories', async (req, res) => {
  return res.json(categories); // object-rest-spread!
});

app.get('/jokes/random/:numberOfJokes/:selectedCategory/:searchInputText', async (req, res) => {
  const result = await Promise.resolve(getRandomiseJokesFromDatabase(req.params))
    .catch(e => res.json({ error: e.message }));
  return res.json(result);
});

app.get('/jokes/bycategory/:selectedCategory/:numberOfPage', async (req, res) => {
  const result = await Promise.resolve(getJokesByCategory(req.params.selectedCategory, req.params.numberOfPage))
    .catch(e => res.json({ error: e.message }));
  return res.json(result);
});

app.get('/jokes/createprofile/:userName/:userPassword', async (req, res) => {
  const result = await Promise.resolve(createProfile(req.params))
    .catch(e => res.json({ error: e.messege}));
  return res.json(result);
});

app.get('/jokes/login/:userName/:userPassword', async (req, res) => {
  const result = await Promise.resolve(loginProfile(req.params))
    .catch(e => res.json({ error: e.messege}));
  return res.json(result);
});

app.get('/jokes/addliked/:userName/:jokeID' , async (req, res) => {
  const result = await Promise.resolve(addLikedJokeToUser(req.params.userName, req.params.jokeID))
    .catch(e => res.json({ error: e.message}));
  return res.json(result);
});

app.get('/jokes/removeliked/:userName/:jokeID' , async (req, res) => {
  const result = await Promise.resolve(removeLikedJokeFromUser(req.params.userName, req.params.jokeID))
    .catch(e => res.json({ error: e.message}));
  return res.json(result);
});

app.get('/jokes/getlikedjokes/:userName', async (req, res) => {
  const result = await Promise.resolve(getLikedJokes(req.params.userName))
    .catch(e => res.json({ error: e.message}));
  return res.json(result);
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