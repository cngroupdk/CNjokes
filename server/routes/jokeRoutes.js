const mongoose = require("mongoose");
const paginateService = require("../services/paginateService");
const Jokes = mongoose.model("jokes");

module.exports = app => {
  app.get("/api/jokes/random", async (req, res) => {
    try {
      const { category } = req.query;
      const query = category ? { category: new RegExp(category, "i") } : {};

      const count = await Jokes.countDocuments(query);
      const randomNumber = Math.floor(Math.random() * count);
      const randomJoke = await Jokes.find(query)
        .limit(1)
        .skip(randomNumber);

      res.send(randomJoke);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  app.get("/api/jokes", async (req, res) => {
    try {
      const { category, page, perPage } = req.query;
      const limit = parseInt(req.query.limit, 10);

      const query = category ? { category: new RegExp(category, "i") } : {};
      const count = await Jokes.countDocuments(query);

      const total = limit > count ? count : limit;
      const jokes = await Jokes.find(query).limit(total);

      const options = {
        total: total,
        page: parseInt(page, 10),
        perPage: parseInt(perPage, 10)
      };

      const response = paginateService.paginate(jokes, options);

      res.send(response);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  app.get("/api/jokes/search", async (req, res) => {
    try {
      const { query } = req.query;
      const total = 25;
      const jokes = await Jokes.find({ value: new RegExp(query, "i") }).limit(
        total
      );

      const options = {
        total: total,
        page: 1,
        perPage: total
      };

      const response = paginateService.paginate(jokes, options);

      res.send(response);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
};
