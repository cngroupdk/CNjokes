const cron = require("node-cron");
const axios = require("axios");
const mongoose = require("mongoose");
const Category = mongoose.model("categories");

module.exports = () => {
  cron.schedule("*/55 * * * *", () => {
    console.log("updating categories");
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then(res => {
        const categories = res.data;
        const categoriesCollection = mongoose.connection.db.collection(
          "categories"
        );

        if (categories) {
          categoriesCollection.deleteMany({}, () => {
            console.log("categories deleted");
            categories.map((item, index) => {
              console.log(item);
              const category = new Category({
                name: item
              });
              category.save();
            });
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  });
};
