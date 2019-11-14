import { getUsersCollection } from "../../libs/dbClientConnect.js";

export const getLikedJokesID = async userName => {
  const collectionUsers = getUsersCollection();
  const usersLikedJokesID = await collectionUsers.findOne({
    userName: userName
  });
  return usersLikedJokesID.likedJokes;
};
