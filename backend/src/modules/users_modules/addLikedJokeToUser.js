import { saveProfile } from './saveProfile.js';
import { getUserIndexByName } from './getUserIndexByName'
let users  = require('../../users/usersDB.json');
users = Array.from(users);

export const addLikedJokeToUser = (userName, jokeID) => {
  const userIndex = getUserIndexByName(userName);
  users[userIndex].likedJokes.push(jokeID);
  saveProfile(users);
}