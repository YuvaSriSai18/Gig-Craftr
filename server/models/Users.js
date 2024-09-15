const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  country: { type: String },
  city: { type: String },
});

const socialLinkSchema = new mongoose.Schema({
  name: { type: String },
  url: { type: String },
});

const experienceSchema = new mongoose.Schema({
  title: { type: String },
  companyName: { type: String },
  country: { type: String },
  city: { type: String },
  startMonth: { type: String },
  startYear: { type: Number },
  endMonth: { type: String },
  endYear: { type: Number },
  workDesc: { type: String },
});

const educationSchema = new mongoose.Schema({
  country: { type: String },
  degree: { type: String },
  startYear: { type: Number },
  endYear: { type: Number },
});

const userSchema = new mongoose.Schema(
  {
    displayName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    photoUrl: { type: String },
    bannerUrl: { type: String },
    about: { type: String },
    rating: { type: Number },
    hourlyRate: { type: Number },
    skills: [{ type: String }],
    socialLinks: [socialLinkSchema], // Embed the SocialLink schema
    location: locationSchema, // Embed the Location schema
    experience: [experienceSchema], // Embed the Experience schema
    education: [educationSchema], // Embed the Education schema
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
