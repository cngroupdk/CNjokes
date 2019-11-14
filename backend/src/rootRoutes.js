import { Router } from "express";
import jokesRoutes from "./modules/jokes_modules/jokesRoutes.js";
import usersRoutes from "./modules/users_modules/usersRoutes.js";

const router = Router();

router.use("/jokes", jokesRoutes);
router.use("/user", usersRoutes);

export default router;
