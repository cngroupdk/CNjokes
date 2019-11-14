import { getJokesCollection } from "../../libs/dbClientConnect.js";
import { getLikedJokesID } from "./getLikedJokesID";

export const getLikedJokes = async (userName, numberOfPage) => {
  const collectionJokes = getJokesCollection();
  const loginUserLikedJokesID = await getLikedJokesID(userName);

  let likedJokes = await collectionJokes
    .find({ id: { $in: loginUserLikedJokesID } })
    .toArray();
  const numberOfResults = likedJokes.length;
  likedJokes = likedJokes.slice((numberOfPage - 1) * 20, numberOfPage * 20 - 1);
  likedJokes.push(numberOfResults);

  return likedJokes;
};
