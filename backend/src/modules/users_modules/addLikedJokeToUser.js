import { saveProfile } from "./saveProfile.js";
import { getUserIndexByName } from "./getUserIndexByName";
let users = require("../../users/usersDB.json");
users = Array.from(users);

export const addLikedJokeToUser = (userName, jokeID) => {
  const userIndex = getUserIndexByName(userName);
  if (users[userIndex].likedJokes.includes(jokeID)) {
    return { response: false };
  }
  users[userIndex].likedJokes.push(jokeID);
  saveProfile(users);
  return { response: true };
};
