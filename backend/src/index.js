import express from 'express';
import { getJokesByCategory } from './modules/jokes_modules/getJokesByCategory.js'
import { getRandomiseJokesFromDatabase } from './modules/jokes_modules/getRandomiseJokesFromDatabase.js'
import { createProfile } from './modules/users_modules/createProfile';
import { loginProfile } from './modules/users_modules/loginProfile';
import { addLikedJokeToUser } from './modules/users_modules/addLikedJokeToUser';
import { getCategories} from './modules/jokes_modules/getCategories.js';
import { removeLikedJokeFromUser } from './modules/users_modules/removeLikedJokeFromUser.js';
import { getLikedJokes } from './modules/users_modules/getLikedJokes';

const app = express();
let cors = require('cors');
app.use(cors());

app.get('/jokes/categories', async (req, res) => {
  return res.json(getCategories());
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