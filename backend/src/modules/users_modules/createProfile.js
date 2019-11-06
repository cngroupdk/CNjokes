import { saveProfile } from "./saveProfile.js";

const bcrypt = require("bcrypt");
let users = require("../../users/usersDB.json");
users = Array.from(users);

export const createProfile = loginParams => {
  const userName = loginParams.userName;
  const userPassword = loginParams.userPassword;
  if (isUserInDB(userName)) {
    return { response: false };
  } else {
    const hashedPassword = bcrypt.hashSync(userPassword, 5);
    users.push({
      userName: userName,
      userPassword: hashedPassword,
      likedJokes: []
    });
    saveProfile(users);
    return { response: true };
  }
};

const isUserInDB = userName => {
  return users.map(user => user.userName).includes(userName);
};
