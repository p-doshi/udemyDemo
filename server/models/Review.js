import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        courseId: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

const Review = mongoose.model("Review", ReviewSchema)
export default Review


