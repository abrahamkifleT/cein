import * as collectionService from "../service/collection.service.js";

export const createCollection = async (req, res) => {
    try {
        const collection = await collectionService.createCollection(req.body);
        res.status(201).json(collection);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAllCollections = async (req, res) => {
    try {
        const collections = await collectionService.getAllCollections();
        res.status(200).json(collections);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getCollectionById = async (req, res) => {
    try {
        const collection = await collectionService.getCollectionById(req.params.id);
        res.status(200).json(collection);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateCollection = async (req, res) => {
    try {
        const collection = await collectionService.updateCollection(req.params.id, req.body);
        res.status(200).json(collection);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteCollection = async (req, res) => {
    try {
        const collection = await collectionService.deleteCollection(req.params.id);
        res.status(200).json(collection);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
