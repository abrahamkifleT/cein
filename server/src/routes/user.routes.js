import express from "express";
import { registerUser, getAllUsers, getUserById, updateUser, deleteUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/get-users", getAllUsers);
router.get("/get-user/:id", getUserById);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

export default router;