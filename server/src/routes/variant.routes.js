import express from "express";
import { createVariant, getAllVariants, getVariantById, updateVariant, deleteVariant } from "../controller/variant.controller.js";

const router = express.Router();

router.post("/create", createVariant)
router.get("/get-variants", getAllVariants)
router.get("/get-variant/:id", getVariantById)
router.put("/update-variant/:id", updateVariant)
router.delete("/delete-variant/:id", deleteVariant)

export default router;
