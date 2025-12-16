import express from "express";
import resumeUpload from "../middleware/resumeUpload.js";

import { uploadResume, getAllResume, deleteResumes } from "../controllers/resume.controller.js";
import { auth } from "../middleware/auth.middleware.js"
const router = express.Router();

router.post("/upload",
    auth,
    resumeUpload.single("resumeUrl"), // 👈 field name must be "resume"
    uploadResume
);

router.get("/", auth, getAllResume);
router.delete("/:id", auth, deleteResumes);

export default router;