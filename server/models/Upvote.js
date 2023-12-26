import mongoose from "mongoose";

const UpvoteSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        courseId: {
            type: String,
        },
        instructorId : {
            type: String,
        },
        reviewId: {
            type: String
        }
    },
    {timestamps: true}
)

const Upvote = mongoose.model("Upvote", UpvoteSchema)
export default Upvote


