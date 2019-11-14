import { Router } from "express";
import { getCategories } from "./getCategories.js";
import { getRandomiseJokesFromDatabase } from "./getRandomiseJokesFromDatabase";
import { getJokesByCategory } from "./getJokesByCategory";

const router = Router();

router.use("/categories", async (req, res) => {
  return res.json(getCategories());
});

router.use(
  "/random/:numberOfJokes/:selectedCategory/:searchInputText",
  async (req, res) => {
    const result = await getRandomiseJokesFromDatabase(req.params);
    return res.json(result);
  }
);

router.use("/bycategory/:selectedCategory/:numberOfPage", async (req, res) => {
  const result = await getJokesByCategory(
    req.params.selectedCategory,
    req.params.numberOfPage
  );
  return res.json(result);
});

export default router;
