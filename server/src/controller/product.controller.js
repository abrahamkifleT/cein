import * as productService from "../service/product.service.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

export const createProduct = async (req, res) => {
    try {
        let imageUrls = [];

        if (req.files && req.files.length > 0) {
            const uploadPromises = req.files.map(file => uploadOnCloudinary(file.path));
            const uploadResults = await Promise.all(uploadPromises);
            imageUrls = uploadResults.filter(result => result !== null).map(result => result.secure_url);
        }

        const productData = {
            ...req.body,
            images: imageUrls
        };

        const product = await productService.createProduct(productData);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}