import express from "express";
import { submitContact, getMessages, getMessage, removeMessage } from "../controllers/contact.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public route → portfolio contact form
router.post("/", submitContact);

// Admin routes → protected
router.get("/", auth, getMessages);
router.get("/:id", auth, getMessage);
router.delete("/:id", auth, removeMessage);

export default router;