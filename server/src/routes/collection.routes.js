import express from "express";
import { createCollection, getAllCollections, getCollectionById, updateCollection, deleteCollection } from "../controller/collection.controller.js";

const router = express.Router();

router.post("/create-collection", createCollection);
router.get("/get-collections", getAllCollections);
router.get("/get-collection/:id", getCollectionById);
router.put("/update-collection/:id", updateCollection);
router.delete("/delete-collection/:id", deleteCollection);

export default router;