const cron = require("node-cron");
const axios = require("axios");
const mongoose = require("mongoose");

module.exports = () => {
  cron.schedule("0 2 * * *", () => {
    console.log("running a task every hour");
    axios
      .get("https://api.chucknorris.io/jokes/search?query=chuck")
      .then(res => {
        const jokes = res.data.result;
        const jokesCollection = mongoose.connection.db.collection("jokes");

        if (jokes) {
          jokesCollection.deleteMany({}, () => {
            console.log("jokes deleted");
            jokesCollection.insertMany(jokes, () => {
              console.log("jokes imported");
            });
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  });
};
