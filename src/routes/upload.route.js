import express from 'express';
import path from 'path';
import multer from 'multer';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { auth } from '../middleware/auth.middleware.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = process.env.UPLOAD_DIR || 'uploads';
const absUpload = path.join(__dirname, '..', uploadDir);

if (!fs.existsSync(absUpload)) {
    fs.mkdirSync(absUpload, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, absUpload),
    filename: (req, file, cb) => {
        const filename = Date.now() + '_' + file.originalname.replace(/\s+/g, '-');
        cb(null, filename);
    }
});

const upload = multer({ storage });

router.post('/image', auth, upload.single('image'), (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.json({ fileName: req.file.filename, url });
});

router.post('/resume', auth, upload.single('resume'), (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.json({ fileName: req.file.filename, url });
});

export default router;
