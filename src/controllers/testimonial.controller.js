import { createTestimonial, getTestimonial, deleteTestimonial } from "../services/testimonial.service.js"

export const createTestimonials = async (req, res) => {
    try {
        const { name, role, message } = req.body;

        if (!name || !role || !message || !req.file) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

        const testimonial = await createTestimonial({
            name,
            role,
            message,
            image: imageUrl
        })
        res.status(201).json({
            message: "Testimonial created successfully",
            testimonial
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const getTestimonials = async (req, res) => {
    try {
        const testimonial = await getTestimonial();
        if (!testimonial || !testimonial.length === 0) {
            return res.status(200).json({
                message: "No record found",
                count: 0,
                data: []
            })
        }
        res.status(200).json({
            message: "Testimonial data",
            count: testimonial.length,
            data: testimonial
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteTestimonials = async (req, res) => {
    try {
        await deleteTestimonial(req.params.id);
        res.status(200).json({ message: "skill deleted successfully", })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}