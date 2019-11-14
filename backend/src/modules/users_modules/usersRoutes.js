import { Router } from "express";
import { createProfile } from "./createProfile";
import { loginProfile } from "./loginProfile";
import { addLikedJokeToUser } from "./addLikedJokeToUser";
import { removeLikedJokeFromUser } from "./removeLikedJokeFromUser.js";
import { getLikedJokes } from "./getLikedJokes";
import { getLikedJokesID } from "./getLikedJokesID";

const router = Router();

router.post("/createprofile", async (req, res) => {
  const result = await createProfile(req.body);
  return res.json(result);
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  console.log(req.body.userName, req.body.userPassword);
  const result = await loginProfile(req.body);
  return res.json(result);
});

router.get("/addliked/:userName/:jokeID", async (req, res) => {
  const result = await addLikedJokeToUser(
    req.params.userName,
    req.params.jokeID
  );

  return res.json(result);
});

router.get("/removeliked/:userName/:jokeID", async (req, res) => {
  const result = await removeLikedJokeFromUser(
    req.params.userName,
    req.params.jokeID
  );
  return res.json(result);
});

router.get("/getlikedjokes/:userName/:pageNumber", async (req, res) => {
  const result = await getLikedJokes(
    req.params.userName,
    req.params.pageNumber
  );
  return res.json(result);
});

router.get("/getlikedjokesID/:userName/", async (req, res) => {
  const result = await getLikedJokesID(req.params.userName);
  return res.json(result);
});

export default router;
