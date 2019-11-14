import { getUsersCollection } from "../../libs/dbClientConnect.js";
import { getLikedJokesID } from "./getLikedJokesID.js";

export const removeLikedJokeFromUser = async (userName, jokeID) => {
  const collectionUsers = getUsersCollection();
  let userLikedJokesID = await getLikedJokesID(userName);
  const userLikedJokesIDToUpdate = userLikedJokesID.filter(
    likeJokeID => likeJokeID !== jokeID
  );

  collectionUsers.updateOne(
    { userName: userName },
    { $set: { likedJokes: userLikedJokesIDToUpdate } }
  );
  return { response: true };
};
