import { getUserByName } from "./getUserByName";

const bcrypt = require("bcrypt");

export const loginProfile = loginParams => {
  const loginUser = getUserByName(loginParams.userName);
  if (loginUser !== undefined) {
    if (bcrypt.compareSync(loginParams.userPassword, loginUser.userPassword)) {
      return { response: true };
    } else {
      return { response: false };
    }
  } else {
    return { response: false };
  }
};
