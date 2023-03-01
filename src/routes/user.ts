import express from "express";
import controller from "../controllers/user.js";

export const router = express.Router();

router.post("/create", controller.createUser);
router.get("/get/:username", controller.readUser);
