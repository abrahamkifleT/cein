import express from "express"
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from "../controller/product.controller.js"
import { protect, admin } from "../middleware/auth.middleware.js"
import { upload } from "../middleware/upload.middleware.js"

const router = express.Router();

router.post("/create", protect, admin, upload.array("images", 5), createProduct)
router.get("/get-products", getProducts)
router.get("/get-product/:id", getProductById)
router.put("/update-product/:id", protect, admin, updateProduct)
router.delete("/delete-product/:id", protect, admin, deleteProduct)

export default router
