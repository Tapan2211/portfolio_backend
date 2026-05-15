import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    resumeUrl: { type: String, required: true }
}, {
    timestamps: true
})

export default mongoose.model("Resume", resumeSchema);