import express from "express";
import { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from "../controller/category.controller.js";

const router = express.Router();

router.post("/create-category", createCategory);
router.get("/get-categories", getAllCategories);
router.get("/get-category/:id", getCategoryById);
router.put("/update-category/:id", updateCategory);
router.delete("/delete-category/:id", deleteCategory);

export default router;
