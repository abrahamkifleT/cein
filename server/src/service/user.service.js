import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const createUser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await User.create({ ...data, password: hashedPassword });
};