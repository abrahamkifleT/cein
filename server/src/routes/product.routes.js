import express from "express"
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from "../controller/product.controller.js"

const router = express.Router();

router.post("/create", createProduct)
router.get("/get-products", getProducts)
router.get("/get-product/:id", getProductById)
router.put("/update-product/:id", updateProduct)
router.delete("/delete-product/:id", deleteProduct)

export default router
