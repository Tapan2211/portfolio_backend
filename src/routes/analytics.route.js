import express from "express";
import {
    trackVisit,
    fetchAnalyticsStats
} from "../controllers/analytics.controller.js";

const router = express.Router();

router.post("/visit", trackVisit);
router.get("/stats", fetchAnalyticsStats);

export default router;
