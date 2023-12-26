import mongoose from "mongoose";

const InstructorSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 25
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 25
        },
        email: {
            type: String,
            required: true,
            max: 25,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 8,
        },
        picturePath: {
            type: String,
            default: "",
        },
        country: {
            type: String,
            default: "ca"
        },
        age: {
            type: Number,
            default: 0
        },
        educationLevel: {
            type: String,
            default: ""
        }
    },
    { timestamps: true }
);

const Instructor = mongoose.model("Instructor", InstructorSchema);
export default Instructor;
