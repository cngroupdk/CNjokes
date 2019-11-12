import { getUsersCollection } from "../db_modules/dbClientConnect.js";
import bcrypt from "bcryptjs";

export const loginProfile = async loginParams => {
  const collectionUsers = getUsersCollection();
  const loginUser = await collectionUsers.findOne({
    userName: loginParams.userName
  });
  if (loginUser === null) {
    return { response: false };
  }
  if (bcrypt.compareSync(loginParams.userPassword, loginUser.userPassword)) {
    return { response: true };
  }
  return { response: false };
};
