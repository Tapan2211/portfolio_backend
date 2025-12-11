import Testimonial from "../models/testimonial.model.js";

export const createTestimonial = async (data) => {
    const { name, role, message, image } = data;

    if (!name || !role || !message || !image) {
        throw new Error("All fields are required");
    }

    const Testimonials = Testimonial.create({
        name,
        role,
        message,
        image
    });
    return Testimonials;
}

export const getTestimonial = async () => {
    return await Testimonial.find().sort({ createdAt: - 1 });
}

export const deleteTestimonial = async (id) => {
    const Testimonials = Testimonial.findByIdAndDelete(id);
    if (!Testimonials) throw new Error("Testimonial not found")
    return Testimonials;
}