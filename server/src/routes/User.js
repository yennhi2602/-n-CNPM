import express from "express";
import { registerController,loginController } from "../controller/User.js";

const router = express.Router();
router.post("/register", registerController)
router.post("/login", loginController)
export default router;