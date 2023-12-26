import Video from "../models/Video.js";

export const getVideos = async(req, res) => {
    try{
        const { courseId } = req.params;
        const videos = await Video.find({courseId});
        res.status(200).json(videos);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const createVideo = async(req, res) => {
    try{
        const { 
            courseId,
            videoPath,
            description
        } = req.body;

        const newVideo = new Video({
            courseId,
            videoPath,
            description
        })

        await newVideo.save()

        const videos = await Video.find({courseId})

        res.status(200).json(videos);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const deleteVideo = async(req, res) => {
    try{
        const { 
            _id
        } = req.body;

        const video = await Video.findOne({_id})
        const courseId = video.courseId

        await Video.deleteOne({_id})

        const videos = Video.find({courseId})
        
        res.status(200).json(videos);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}
