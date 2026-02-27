import * as variantService from "../service/variant.service.js";

export const createVariant = async (req, res) => {
    try {
        const variant = await variantService.createVariant(req.body);
        res.status(201).json(variant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAllVariants = async (req, res) => {
    try {
        const variants = await variantService.getAllVariants();
        res.status(200).json(variants);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getVariantById = async (req, res) => {
    try {
        const variant = await variantService.getVariantById(req.params.id);
        res.status(200).json(variant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateVariant = async (req, res) => {
    try {
        const variant = await variantService.updateVariant(req.params.id, req.body);
        res.status(200).json(variant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteVariant = async (req, res) => {
    try {
        const variant = await variantService.deleteVariant(req.params.id);
        res.status(200).json(variant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
