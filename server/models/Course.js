import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            default: "Course"
        },
        instructorId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            max: 150,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            default: "Course",
        },
    },
    { timestamps: true }
);

const Course = mongoose.model("Course", CourseSchema);
export default Course;
