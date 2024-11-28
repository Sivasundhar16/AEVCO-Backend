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
    Subject: {
      type: String,
      enum: ["CSE/IT", "ECE/EEE", "Mechanical", "Management", "Civil"],
    },
    Catagory: {
      type: String,
      enum: [
        "Design",
        "Development",
        "Business",
        "Marketing",
        "Photography",
        "Acting",
      ],
    },

    Language: {
      type: String,
    },
    Learningtype: {
      type: String,
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
    Duration: {
      type: String,
      required: true,
      trim: true,
    },

    Image: {
      type: String,
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
