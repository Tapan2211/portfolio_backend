
import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["visit", "project_view", "contact_click"],
        required: true,

    },
    page: {
        type: String, // home, projects, contact
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        default: null
    },

    referrer: {
        type: String,
        default: "direct"
    },

    ipAddress: String,

    userAgent: String
}, {
    timestamps: true
});

export default mongoose.model("Analytics", analyticsSchema)