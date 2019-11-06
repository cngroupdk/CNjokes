let users = require("../../users/usersDB.json");
users = Array.from(users);

export const getUserByName = userName => {
  return users.find(user => user.userName === userName);
};
