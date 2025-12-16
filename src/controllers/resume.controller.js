import { createResume, getResume, deletResume } from "../services/resume.service.js";

export const uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Resume file is required" });
        }

        const resumeUrl = `${req.protocol}://${req.get("host")}/uploads/resumes/${req.file.filename}`;

        const resume = await createResume(resumeUrl);
        res.status(201).json({
            message: "Resume upload successfully",
            resume
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const getAllResume = async (req, res) => {
    try {
        const resume = await getResume();
        res.status(200).json(resume);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteResumes = async (req, res) => {
    try {
        const resume = await deletResume(req.params.id);
        res.status(200).json({
            message: "Resume deleted successfully",
            resume
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
