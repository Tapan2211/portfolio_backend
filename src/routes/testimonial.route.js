import express from 'express';
const router = express.Router();
import upload from "../middleware/upload.js";

import { createTestimonials, getTestimonials, deleteTestimonials } from '../controllers/testimonial.controller.js';
import { auth } from '../middleware/auth.middleware.js';

router.post('/create', auth, upload.single("image"), createTestimonials);
router.get('/', auth, getTestimonials);
router.delete('/:id', auth, deleteTestimonials);

export default router;