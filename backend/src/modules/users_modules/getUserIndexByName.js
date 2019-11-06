let users = require("../../users/usersDB.json");
users = Array.from(users);

export const getUserIndexByName = userName => {
  return users.findIndex(user => user.userName === userName);
};
