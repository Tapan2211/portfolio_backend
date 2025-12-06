import { registerAdmin, loginAdmin } from '../services/auth.service.js';

export const regisgter = async (req, res) => {
    try {

        const result = await registerAdmin(req.body);
        res.status(201).json({
            message: "Admin registered successfully",
            ...result
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const login = async (req, res) => {
    try {
        const result = await loginAdmin(req.body);
        res.status(200).json({
            message: "Login successfullu",
            ...result
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}