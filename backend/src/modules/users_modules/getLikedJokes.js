import jokesDB from '../../jokes.json';
import { getUserByName } from './getUserByName';
let users  = require('../../users/usersDB.json');
users = Array.from(users);

export const getLikedJokes = userName => {
  console.log(userName)
  const loginUserLikedJokesID = getUserByName(userName).likedJokes;
  return loginUserLikedJokesID.map(likeJokeID => {
     return jokesDB.find(joke => joke.id === likeJokeID)
   });
};