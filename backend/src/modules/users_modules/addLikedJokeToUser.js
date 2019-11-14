import { getUsersCollection } from "../../libs/dbClientConnect.js";
import { getLikedJokesID } from "./getLikedJokesID.js";

export const addLikedJokeToUser = async (userName, jokeID) => {
  const collectionUsers = getUsersCollection();
  let userLikedJokesID = await getLikedJokesID(userName);

  if (userLikedJokesID.includes(jokeID)) {
    return { response: false };
  }

  userLikedJokesID.push(jokeID);
  collectionUsers.updateOne(
    { userName: userName },
    { $set: { likedJokes: userLikedJokesID } }
  );
  return { response: true };
};
