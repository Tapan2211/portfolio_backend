import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    content: { type: String, default: [] },
    tags: { type: String },
    image: { type: String }
}, {
    timestamps: true
});

export default mongoose.model("Blog", blogSchema);