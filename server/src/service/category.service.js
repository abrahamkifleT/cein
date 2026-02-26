import Category from "../models/catagory.model.js";

export const createCategory = async (data) => {
    try {
        const category = await Category.create(data);
        return category;
    } catch (error) {
        throw error;
    }
}

export const getAllCategories = async () => {
    try {
        const categories = await Category.find();
        return categories;
    } catch (error) {
        throw error;
    }
}

export const getCategoryById = async (id) => {
    try {
        const category = await Category.findById(id);
        return category;
    } catch (error) {
        throw error;
    }
}

export const updateCategory = async (id, data) => {
    try {
        const category = await Category.findByIdAndUpdate(id, data, { new: true });
        return category;
    } catch (error) {
        throw error;
    }
}

export const deleteCategory = async (id) => {
    try {
        const category = await Category.findByIdAndDelete(id);
        return category;
    } catch (error) {
        throw error;
    }
}
