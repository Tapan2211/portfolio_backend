import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    techStack: [String],
    image: String,
    githubLink: String,
    liveLink: String,
    category: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Project", ProjectSchema);
