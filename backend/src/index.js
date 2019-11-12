import express from "express";
import { getJokesByCategory } from "./modules/jokes_modules/getJokesByCategory.js";
import { getRandomiseJokesFromDatabase } from "./modules/jokes_modules/getRandomiseJokesFromDatabase.js";
import { createProfile } from "./modules/users_modules/createProfile";
import { loginProfile } from "./modules/users_modules/loginProfile";
import { addLikedJokeToUser } from "./modules/users_modules/addLikedJokeToUser";
import { getCategories } from "./modules/jokes_modules/getCategories.js";
import { removeLikedJokeFromUser } from "./modules/users_modules/removeLikedJokeFromUser.js";
import { getLikedJokes } from "./modules/users_modules/getLikedJokes.js";
import { getLikedJokesID } from "./modules/users_modules/getLikedJokesID.js";
import { clientConnect } from "./modules/db_modules/dbClientConnect.js";

const app = express();
let cors = require("cors");
app.use(cors());

clientConnect(); //database connection

app.get("/jokes/categories", async (req, res) => {
  return res.json(getCategories());
});

app.get(
  "/jokes/random/:numberOfJokes/:selectedCategory/:searchInputText",
  async (req, res) => {
    const result = await getRandomiseJokesFromDatabase(req.params);
    return res.json(result);
  }
);

app.get(
  "/jokes/bycategory/:selectedCategory/:numberOfPage",
  async (req, res) => {
    const result = await getJokesByCategory(req.params.selectedCategory, req.params.numberOfPage);
    return res.json(result);
  }
);

app.get("/jokes/createprofile/:userName/:userPassword", async (req, res) => {
  const result = await createProfile(req.params);
  return res.json(result);
});

app.get("/jokes/login/:userName/:userPassword", async (req, res) => {
  const result = await loginProfile(req.params);
  return res.json(result);
});

app.get("/jokes/addliked/:userName/:jokeID", async (req, res) => {
  const result = await addLikedJokeToUser(req.params.userName, req.params.jokeID)
  
  return res.json(result);
});

app.get("/jokes/removeliked/:userName/:jokeID", async (req, res) => {
  const result = await removeLikedJokeFromUser(req.params.userName, req.params.jokeID);
  return res.json(result);
});

app.get("/jokes/getlikedjokes/:userName/:pageNumber", async (req, res) => {
  const result = await getLikedJokes(req.params.userName, req.params.pageNumber)
  return res.json(result);
});

app.get("/jokes/getlikedjokesID/:userName/", async (req, res) => {
  const result = await getLikedJokesID(req.params.userName);
  return res.json(result);
});

const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    console.error(err);
  }

  if (__DEV__) {
    // webpack flags!
    console.log("> in development");
  }

  console.log(`> listening on port ${port}`);
});
