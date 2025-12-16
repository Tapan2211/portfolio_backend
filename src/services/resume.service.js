import Resume from "../models/resume.model.js";

export const createResume = async (resumeUrl) => {

    if (!resumeUrl) {
        throw new Error("Resume file is required");
    }

    return await Resume.create({ resumeUrl });
}

export const getResume = async () => {
    return await Resume.find().sort({ createdAt: - 1 });
}

export const deletResume = async (id) => {
    const resume = await Resume.findByIdAndDelete(id);
    if (!resume) throw new Error("Resume not found");
    return resume;
}