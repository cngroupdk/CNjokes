import jokesDB from "../../jokes.json";
import { getUserByName } from "./getUserByName";
let users = require("../../users/usersDB.json");
users = Array.from(users);

export const getLikedJokes = (userName, numberOfPage) => {
  const loginUserLikedJokesID = getUserByName(userName).likedJokes;
  let jokes = loginUserLikedJokesID.map(likeJokeID => {
    return jokesDB.find(joke => joke.id === likeJokeID);
  });
  const numberOfResults = jokes.length;
  jokes = jokes.slice((numberOfPage - 1) * 20, numberOfPage * 20 - 1);
  jokes.push(numberOfResults);
  return jokes;
};
