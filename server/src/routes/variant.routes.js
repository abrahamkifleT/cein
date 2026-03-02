import express from "express";
import { createVariant, getAllVariants, getVariantById, updateVariant, deleteVariant } from "../controller/variant.controller.js";
import { protect, admin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", protect, admin, createVariant)
router.get("/get-variants", getAllVariants)
router.get("/get-variant/:id", getVariantById)
router.put("/update-variant/:id", protect, admin, updateVariant)
router.delete("/delete-variant/:id", protect, admin, deleteVariant)

export default router;
