import express from "express";
import {
    createExperience,
    getExperience,
    getSingleExperience,
    updateExperience,
    deleteExperience
} from "../controllers/experience.controller.js";

import { auth } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/create", auth, createExperience);

router.get("/", auth, getExperience);

router.get("/:id", auth, getSingleExperience);

router.put("/update/:id", auth, updateExperience);

router.delete("/delete/:id", auth, deleteExperience);

export default router;