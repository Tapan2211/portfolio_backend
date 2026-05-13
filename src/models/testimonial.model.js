import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    rate: {
        type: Number,
        required: true,
        min: 1,
        max: 5, required: true
    },
    role: { type: String, required: true },
    message: { type: String, required: true },
    image: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Testimonial", TestimonialSchema);