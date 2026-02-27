import Variant from "../models/variant.model.js";

export const createVariant = async (data) => {
    try {
        const variant = await Variant.create(data);
        return variant;
    } catch (error) {
        throw error;
    }
}

export const getAllVariants = async () => {
    try {
        const variants = await Variant.find();
        return variants;
    } catch (error) {
        throw error;
    }
}

export const getVariantById = async (id) => {
    try {
        const variant = await Variant.findById(id);
        return variant;
    } catch (error) {
        throw error;
    }
}

export const updateVariant = async (id, data) => {
    try {
        const variant = await Variant.findByIdAndUpdate(id, data, { new: true });
        return variant;
    } catch (error) {
        throw error;
    }
}

export const deleteVariant = async (id) => {
    try {
        const variant = await Variant.findByIdAndDelete(id);
        return variant;
    } catch (error) {
        throw error;
    }
}
