import express from "express";
import { protect, admin } from "../middleware/auth.middleware.js";
import { adminLoginController, adminRegisterController, getAllUsersController } from "../controller/admin.controller.js";

const router = express.Router();

router.post("/register", adminRegisterController);
router.post("/login", adminLoginController);
router.get("/all-users", protect, admin, getAllUsersController);

export default router;