import express from 'express';
import upload from "../middleware/upload.js";
import { creatBlogController, getBlogsController, getBlogBySlugController, updateBlogController, deleteBlogController } from "../controllers/blog.controller.js";
import { auth } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/create', auth, upload.single("image"), creatBlogController);
router.get('/', auth, getBlogsController);
router.get('/:slug', auth, getBlogBySlugController);
router.put('/:id', auth, auth, upload.single("image"), updateBlogController);
router.delete('/:id', auth, deleteBlogController);

export default router;