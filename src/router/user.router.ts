import { Router } from "express";
import { create, login } from "../controller/user.controller";

const router = Router();

router.post("/login", login);
router.post("/create", create);

export default router;
