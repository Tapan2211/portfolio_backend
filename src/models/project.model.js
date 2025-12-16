import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: [String], required: true },
    image: String,
    githubLink: String,
    liveLink: String,
    category: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Project", ProjectSchema);
