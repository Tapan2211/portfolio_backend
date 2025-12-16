import Project from "../models/project.model.js";

export const createProject = async (data) => {
    const createProject = await Project.create(data);
    return createProject;
}

export const getAllProjects = async () => {
    return await Project.find().sort({ createdAt: - 1 });
}

export const getProjectById = async (id) => {
    const getProjectById = await Project.findById(id);
    return getProjectById;
}

export const updateProjetById = async (id, data) => {
    const updateProjetById = await Project.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    });
    return updateProjetById;
}

export const deleteProject = async (id) => {
    const deleteProject = await Project.findByIdAndDelete(id);
    return deleteProject;
}