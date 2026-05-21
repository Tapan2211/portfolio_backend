import {
    createEducationService,
    getEducationsService,
    getSingleEducationService,
    updateEducationService,
    deleteEducationService
} from "../services/education.service.js";

// CREATE

export const createEducation = async (req, res) => {

    try {

        const {
            year,
            field,
            designation,
            collegeName,
            city
        } = req.body;

        if (
            !year ||
            !field ||
            !designation ||
            !collegeName ||
            !city
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const education = await createEducationService(req.body);

        res.status(201).json({
            success: true,
            message: "Education created successfully",
            data: education
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// GET ALL

export const getEducations = async (req, res) => {

    try {

        const educations = await getEducationsService();

        res.status(200).json({
            success: true,
            count: educations.length,
            data: educations
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// GET SINGLE

export const getSingleEducation = async (req, res) => {

    try {

        const education = await getSingleEducationService(req.params.id);

        if (!education) {
            return res.status(404).json({
                success: false,
                message: "Education not found"
            });
        }

        res.status(200).json({
            success: true,
            data: education
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// UPDATE

export const updateEducation = async (req, res) => {

    try {

        const education = await updateEducationService(
            req.params.id,
            req.body
        );

        if (!education) {
            return res.status(404).json({
                success: false,
                message: "Education not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Education updated successfully",
            data: education
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// DELETE

export const deleteEducation = async (req, res) => {

    try {

        const education = await deleteEducationService(req.params.id);

        if (!education) {
            return res.status(404).json({
                success: false,
                message: "Education not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Education deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};