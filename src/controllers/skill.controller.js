import { createSkill, getSkills, deleteSkills } from '../services/skill.service.js';


export const skillCreate = async (req, res) => {
    try {
        const { name, level, category } = req.body;

        if (!name || !level || !category || !req.file) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

        const skill = await createSkill({
            name,
            category,
            level,
            image: imageUrl
        });

        res.status(201).json({
            message: "Skill created successfully",
            skill,
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const getAllSkills = async (req, res) => {
    try {
        const skills = await getSkills();
        if (!skills || !skills.length === 0) {
            return res.status(200).json({
                message: "No record found",
                count: 0,
                data: []
            })
        }
        res.status(200).json({
            message: "Skills fetched successfully",
            count: skills.length,
            data: skills
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const skillDelete = async (req, res) => {
    try {
        await deleteSkills(req.params.id);
        res.status(200).json({
            message: "skill deleted successfully",
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}