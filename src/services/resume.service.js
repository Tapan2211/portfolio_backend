import Resume from "../models/resume.model.js";

export const createResume = async ({ name, email, resumeUrl }) => {

    if (!name || !email || !resumeUrl) {
        throw new Error("All fields are required");
    }

    return await Resume.create({
        name,
        email,
        resumeUrl
    });
}

export const getResume = async () => {
    return await Resume.find().sort({ createdAt: -1 });
}

export const deletResume = async (id) => {

    const resume = await Resume.findByIdAndDelete(id);

    if (!resume) {
        throw new Error("Resume not found");
    }

    return resume;
}