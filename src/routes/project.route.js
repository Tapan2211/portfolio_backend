import express from 'express';
import upload from "../middleware/upload.js";

import { createProjectP, getAllProjectsP, getProjectByIdP, updateProjectP, deleteProjectP } from "../controllers/project.controller.js"
import { auth } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/create', auth, upload.single("image"), createProjectP);
router.get('/', auth, getAllProjectsP);
router.get('/:id', getProjectByIdP);
router.put("/:id", auth, upload.single("image"), updateProjectP);
router.delete('/:id', auth, deleteProjectP);

export default router;