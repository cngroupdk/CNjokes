import { getUserIndexByName } from './getUserIndexByName';
import { saveProfile } from './saveProfile';
let users  = require('../../users/usersDB.json');
users = Array.from(users);

export const removeLikedJokeFromUser = (userName, jokeID) => {
  const userIndex = getUserIndexByName(userName);
  const newLikedJokes = users[userIndex].likedJokes.filter(likeJokeID => likeJokeID !== jokeID)
  users[userIndex].likedJokes = newLikedJokes;
  saveProfile(users);
}