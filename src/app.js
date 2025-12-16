import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.route.js";
import contactRoute from "./routes/contact.route.js";
import skillRoute from "./routes/skill.route.js";
import testimonialRoute from "./routes/testimonial.route.js";
import projectRoute from './routes/project.route.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Connect MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Static uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API Routes
app.use("/auth/v1", authRoute);
app.use("/contact/v1", contactRoute);
app.use("/skill/v1", skillRoute);
app.use("/testimonial/v1", testimonialRoute);
app.use("/project/v1", projectRoute);

app.get("/", (req, res) => {
    res.send("Portfolio Backend Running...");
});

export default app;
