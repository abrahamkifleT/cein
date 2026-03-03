import express from "express";
import { registerUser, getAllUsers, getUserById, updateUser, deleteUser } from "../controller/user.controller.js";
import { protect, admin } from "../middleware/auth.middleware.js";
import { validate, registerSchema, updateUserSchema } from "../middleware/validate.middleware.js";

const router = express.Router();

router.post("/register", validate(registerSchema), registerUser);
router.get("/get-users", protect, admin, getAllUsers);
router.get("/get-user/:id", protect, admin, getUserById);
router.put("/update-user/:id", protect, admin, validate(updateUserSchema), updateUser);
router.delete("/delete-user/:id", protect, admin, deleteUser);

export default router;