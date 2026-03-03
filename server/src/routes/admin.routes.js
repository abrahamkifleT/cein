import express from "express";
import { protect, admin } from "../middleware/auth.middleware.js";
import { adminLoginController, adminRegisterController, getAllUsersController } from "../controller/admin.controller.js";
import { validate, registerSchema, loginSchema } from "../middleware/validate.middleware.js";

const router = express.Router();

router.post("/register", validate(registerSchema), adminRegisterController);
router.post("/login", validate(loginSchema), adminLoginController);
router.get("/all-users", protect, admin, getAllUsersController);

export default router;