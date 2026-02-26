import mongoose from "mongoose";
import Collection from "../models/collection.model.js";

export const createCollection = async (data) => {
    try {
        const collection = await Collection.create(data);
        return collection;
    } catch (error) {
        throw error;
    }
}

export const getAllCollections = async () => {
    try {
        const collections = await Collection.find();
        return collections;
    } catch (error) {
        throw error;
    }
}

export const getCollectionById = async (id) => {
    try {
        const collection = await Collection.findById(id);
        return collection;
    } catch (error) {
        throw error;
    }
}

export const updateCollection = async (id, data) => {
    try {
        const collection = await Collection.findByIdAndUpdate(id, data, { new: true });
        return collection;
    } catch (error) {
        throw error;
    }
}

export const deleteCollection = async (id) => {
    try {
        const collection = await Collection.findByIdAndDelete(id);
        return collection;
    } catch (error) {
        throw error;
    }
}
