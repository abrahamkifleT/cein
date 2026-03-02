import * as adminService from "../service/admin.service.js"

export const adminRegisterController = async (req, res) => {
    try {
        const user = await adminService.adminRegisterService(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const adminLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await adminService.adminLoginService({ email, password });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllUsersController = async (req, res) => {
    try {
        const users = await adminService.getAllUsersService();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}   