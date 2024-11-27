import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      trim: true,
    },
    courseTutor: {
      type: String,
      required: true,
      trim: true,
    },
    Category: {
      type: String,
      enum: ["CSE/IT", "ECE/EEE", "Mechanical", "Management", "Civil"],
      required: true,
    },
    courseRating: {
      type: Number,
      min: 1,
      max: 5,
    },
    Description: {
      type: String,
      required: true,
      trim: true,
    },
    Image: {
      type: String, // URL or path to the image
      required: true,
    },
    courseOverview: {
      type: String,
      required: true,
    },
    coursePrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
