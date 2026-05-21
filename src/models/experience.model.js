import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const experienceSchema = mongoose.Schema({
    year: { type: String, required: true },
    position: { type: String, required: true },
    companyName: { type: String, required: true },
    city: { type: String, required: true },
}, {
    timestamps: true
});

export default mongoose.model("Experience", experienceSchema);

