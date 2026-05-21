import {
    createExperienceService,
    getExperienceService,
    getSingleExperienceService,
    updateExperienceService,
    deleteExperienceService
} from "../services/experience.service.js";

export const createExperience = async (req, res) => {
    try {
        const {
            year,
            position,
            companyName,
            city
        } = req.body;

        if (
            !year ||
            !position ||
            !companyName ||
            !city
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const experience = await createExperienceService(req.body);

        res.status(201).json({
            success: true,
            message: "Experience created successfully",
            data: experience
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// GET ALL

export const getExperience = async (req, res) => {

    try {

        const experience = await getExperienceService();

        res.status(200).json({
            success: true,
            count: experience.length,
            data: experience
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// GET SINGLE

export const getSingleExperience = async (req, res) => {

    try {

        const experience = await getSingleExperienceService(req.params.id);

        if (!experience) {
            return res.status(404).json({
                success: false,
                message: "Experience not found"
            });
        }

        res.status(200).json({
            success: true,
            data: experience
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// UPDATE

export const updateExperience = async (req, res) => {

    try {

        const experience = await updateExperienceService(
            req.params.id,
            req.body
        );

        if (!experience) {
            return res.status(404).json({
                success: false,
                message: "Experience not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Experience updated successfully",
            data: experience
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// DELETE

export const deleteExperience = async (req, res) => {

    try {

        const experience = await deleteExperienceService(req.params.id);

        if (!experience) {
            return res.status(404).json({
                success: false,
                message: "Experience not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Experience deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};