import Education from '../models/education.model.js';

export const createEducationService = async (data) => {
    return await Education.create(data);
}

export const getEducationsService = async () => {
    return await Education.find().sort({ createdAt: -1 });
}

export const getSingleEducationService = async (id) => {
    return await Education.findById(id);
}

export const updateEducationService = async (id, data) => {
    return await Education.findByIdAndUpdate(
        id,
        data,
        { new: true }
    );
}

export const deleteEducationService = async (id) => {
    return await Education.findByIdAndDelete(id);
}