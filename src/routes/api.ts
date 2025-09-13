import express from "express";
import autController from "../controllers/auth.controller";
const router = express.Router();

router.post("/auth/register", autController.register);

export default router;
