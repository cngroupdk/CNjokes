import mongoose from "mongoose";

const Users = mongoose.model("Users");
//import { getUsersCollection } from "../../libs/dbClientConnect.js";
//import bcrypt from "bcryptjs";

export const createProfile = async (loginParams, res) => {
  const user = loginParams;

  const finalUser = new Users(user);

  finalUser.setPassword(user.userPassword);

  return finalUser
    .save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }));

  // const collectionUsers = getUsersCollection();
  // if (
  //   (await collectionUsers.findOne({ userName: loginParams.userName })) !== null
  // ) {
  //   return { response: false };
  // }
  // const hashedPassword = bcrypt.hashSync(loginParams.userPassword, 5);
  // const newUser = {
  //   userName: loginParams.userName,
  //   userPassword: hashedPassword,
  //   likedJokes: []
  // };
  // collectionUsers.insertOne(newUser);
  // return { response: true };
};
