import mongoose, { Schema } from "mongoose";

const AboutSchema = new mongoose.Schema({
    name: String,
    headline: String,
    bio: String,
    profileImage: String,
    experienceYears: Number
},
    { timestamps: true }
);

module.exports = mongoose.model("About", AboutSchema);