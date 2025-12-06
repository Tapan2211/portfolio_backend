import express from 'express';
import { regisgter, login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/register', regisgter);
router.post('/login', login);

export default router;