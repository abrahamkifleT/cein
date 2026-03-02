import express from "express";
import { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from "../controller/category.controller.js";
import { protect, admin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create-category", protect, admin, createCategory);
router.get("/get-categories", getAllCategories);
router.get("/get-category/:id", getCategoryById);
router.put("/update-category/:id", protect, admin, updateCategory);
router.delete("/delete-category/:id", protect, admin, deleteCategory);

export default router;
