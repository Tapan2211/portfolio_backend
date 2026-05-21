import express from "express";
import {
    createEducation,
    getEducations,
    getSingleEducation,
    updateEducation,
    deleteEducation
} from "../controllers/education.controller.js";
import { auth } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/create", auth, createEducation);

router.get("/", auth, getEducations);

router.get("/:id", auth, getSingleEducation);

router.put("/update/:id", auth, updateEducation);

router.delete("/delete/:id", auth, deleteEducation);

export default router;

