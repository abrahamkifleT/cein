import Product from "../models/product.model.js"

export const createProduct = async (data) => {
    try {
        const product = await Product.create(data);
        return product;
    } catch (error) {
        throw error;
    }
}

export const getAllProducts = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        throw error;
    }
}

export const getProductById = async (id) => {
    try {
        const product = await Product.findById(id);
        return product;
    } catch (error) {
        throw error;
    }
}

export const updateProduct = async (id, data) => {
    try {
        const product = await Product.findByIdAndUpdate(id, data, { new: true });
        return product;
    } catch (error) {
        throw error;
    }
}

export const deleteProduct = async (id) => {
    try {
        const product = await Product.findByIdAndDelete(id);
        return product;
    } catch (error) {
        throw error;
    }
}