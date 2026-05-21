import Experience from '../models/experience.model.js';

export const createExperienceService = async (data) => {
    return await Experience.create(data);
}

export const getExperienceService = async () => {
    return await Experience.find().sort({ createdAt: -1 });
}

export const getSingleExperienceService = async (id) => {
    return await Experience.findById(id);
}

export const updateExperienceService = async (id, data) => {
    return await Experience.findByIdAndUpdate(
        id,
        data,
        { new: true }
    );
}

export const deleteExperienceService = async (id) => {
    return await Experience.findByIdAndDelete(id);
}