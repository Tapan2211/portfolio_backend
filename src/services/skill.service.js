import Skill from '../models/skill.model.js';


export const createSkill = async ({ name, category, level, image }) => {

    if (!name || !category || !level || !image) {
        throw new Error("All fields are required");
    }

    const skills = Skill.create({
        name,
        category,
        level,
        image
    });
    return skills;
}

export const getSkills = async () => {
    return await Skill.find().sort({ createdAt: - 1 });
}

export const deleteSkills = async (id) => {
    const skill = Skill.findByIdAndDelete(id);
    if (!skill) throw new Error("Skill not found")
    return skill;
}


