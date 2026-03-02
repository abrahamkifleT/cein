import User from "../models/user.model.js";


export const adminRegisterService = async (data) => {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
        throw new Error("User already exisist")
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const user = await User.create({
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: "admin"
    })

    const token = generateToken(user._id);
    return { user, token }
}

export const adminLoginService = async (data) => {
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

export const getAllUsersService = async () => {
    const users = await User.find().select("-password");
    return users;
}