import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const createUser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await User.create({ ...data, password: hashedPassword });
};

export const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw error;
    }
};

export const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw error;
    }
};

export const updateUser = async (id, data) => {
    try {
        const user = await User.findByIdAndUpdate(id, data, { new: true });
        return user;
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const user = await User.findByIdAndDelete(id);
        return user;
    } catch (error) {
        throw error;
    }
};