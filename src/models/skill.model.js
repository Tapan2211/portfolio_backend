import mongoose from "mongoose";

const SkillScema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true
});

export default mongoose.model("Skill", SkillScema);