import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.js"

export const registerUserService = async (data) => {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
        throw new Error("User already exisist")
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const user = await User.create({
        name: data.name,
        email: data.email,
        password: hashedPassword,
    })

    const token = generateToken(user._id);
    return { user, token }
}

export const loginUserService = async (data) => {
    const user = await User.findOne({ email: data.email })

    if (!user) {
        throw new Error("Invalid email")
    }

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
        throw Error("Invalid password")
    }

    const token = generateToken(user._id)
    return { user, token }
}