import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    year: { type: String, required: true },
    field: { type: String, required: true },
    designation: { type: String, required: true },
    collegeName: { type: String, required: true },
    city: { type: String, required: true },
}, {
    timestamps: true
});

export default mongoose.model("Education", educationSchema);