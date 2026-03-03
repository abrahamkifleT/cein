import express from "express";
import { registerUser, loginUser } from "../controller/auth.controller.js";
import { validate, registerSchema, loginSchema } from "../middleware/validate.middleware.js";

const router = express.Router();

router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);

export default router;