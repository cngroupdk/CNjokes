const fs = require("fs");

export const saveProfile = users => {
  var path = require("path");
  const jsonString = JSON.stringify(users, null, 2);
  fs.writeFile(
    path.join(__dirname, "../../users/usersDB.json"),
    jsonString,
    err => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    }
  );
};
