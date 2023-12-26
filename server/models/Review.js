import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        courseId: String,
        instructorId: String,
        description: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

const Review = mongoose.model("Review", ReviewSchema)
export default Review


