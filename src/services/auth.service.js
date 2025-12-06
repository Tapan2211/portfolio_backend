import Admin from '../models/admin.model.js'
import { comparePassword, hashPassword } from '../utils/password.js'
import { generateToken } from '../utils/token.js';

export const registerAdmin = async (data) => {
    const { name, email, password } = data;

    const exists = await Admin.findOne({ email });
    if (exists) throw new Error('Admin already exists');

    const hashedPassword = await hashPassword(password);

    const admin = await Admin.create({
        name,
        email,
        password_hash: hashedPassword
    });

    return {
        admin,
        token: generateToken(admin)
    }
};

export const loginAdmin = async (data) => {
    const { email, password } = data;

    const admin = await Admin.findOne({ email });
    if (!admin) throw new Error("Invalid email or password");

    const isMatch = await comparePassword(password, admin.password_hash);
    if (!isMatch) throw new Error("Invalid email or password");

    return {
        admin,
        token: generateToken(admin),
    }
};