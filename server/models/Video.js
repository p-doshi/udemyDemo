import mongoose from "mongoose";

const VideoSchema = mongoose.Schema(
    {
        courseId: {
            type: String,
            required: true
        },
        videoPath: {
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

const Video = mongoose.model("Video", VideoSchema)
export default Video
