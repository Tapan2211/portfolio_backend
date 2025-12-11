import express from 'express';
import upload from "../middleware/upload.js";

import { skillCreate, getAllSkills, skillDelete } from '../controllers/skill.controller.js';
import { auth } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/create', auth, upload.single("image"), skillCreate);
router.get('/', getAllSkills);
router.delete('/:id', auth, skillDelete);

export default router;