import express from "express";
import { createCollection, getAllCollections, getCollectionById, updateCollection, deleteCollection } from "../controller/collection.controller.js";
import { protect, admin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create-collection", protect, admin, createCollection);
router.get("/get-collections", getAllCollections);
router.get("/get-collection/:id", getCollectionById);
router.put("/update-collection/:id", protect, admin, updateCollection);
router.delete("/delete-collection/:id", protect, admin, deleteCollection);

export default router;