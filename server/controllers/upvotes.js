import Upvote from "../models/Upvote.js"

export const toggleUpvotesCourse = async(req, res) => {
    try{
        const {userId, courseId} = req.body
        const upvote = await Upvote.findOne({userId, courseId})

        if (upvote) {
            await Upvote.deleteOne({userId, courseId})
        } else {
            const newUpvote = new Upvote({userId, courseId})
            await newUpvote.save()
        }

        const upvotes = await Upvote.find({courseId})
        res.status(200).json(upvotes)
    } catch(err) {
        console.error(err)
        res.status(500).json({message: err.message})
    }
}

export const toggleUpvotesInstructor = async(req, res) => {
    try{
        const {userId, instructorId} = req.body
        const upvote = await Upvote.findOne({userId, instructorId})

        if (upvote) {
            await Upvote.deleteOne({userId, instructorId})
        } else {
            const newUpvote = new Upvote({userId, instructorId})
            await newUpvote.save()
        }

        const upvotes = await Upvote.find({courseId})
        res.status(200).json(upvotes)
    } catch(err) {
        console.error(err)
        res.status(500).json({message: err.message})
    }
}

export const toggleUpvotesReview = async(req, res) => {
    try{
        const {userId, reviewId} = req.body
        const upvote = await Upvote.findOne({userId, reviewId})

        if (upvote) {
            await Upvote.deleteOne({userId, reviewId})
        } else {
            const newUpvote = new Upvote({userId, reviewId})
            await newUpvote.save()
        }

        const upvotes = await Upvote.find({courseId})
        res.status(200).json(upvotes)
    } catch(err) {
        console.error(err)
        res.status(500).json({message: err.message})
    }
}

export const getUpvotesCourse = async(req, res) => {
    try{
        const {courseId} = req.params
        const upvotes = await Upvote.find({courseId})
        res.status(200).json(upvotes)
    } catch (err) {
        console.error(err)
        res.status(404).json({message: err.message})
    }
}

export const getUpvotesInstructor = async(req, res) => {
    try{
        const {instructorId} = req.params
        const upvotes = await Upvote.find({instructorId})
        res.status(200).json(upvotes)
    } catch (err) {
        console.error(err)
        res.status(404).json({message: err.message})
    }
}

export const getUpvotesReview = async(req, res) => {
    try{
        const {reviewId} = req.params
        const upvotes = await Upvote.find({reviewId})
        res.status(200).json(upvotes)
    } catch (err) {
        console.error(err)
        res.status(404).json({message: err.message})
    }
}

