import express from "express";
import controller from "../controllers/user";

const router = express.Router();

router.post("/create", controller.createUser);
router.get("/get/:username", controller.readUser);

export = router;
