import Review from "../models/Review.js";

export const getReviewsCourse = async(req, res) => {
    try{
        const { courseId } = req.params;
        const reviews = await Review.find(courseId);
        res.status(200).json(reviews);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const getReviewsInstructor = async(req, res) => {
    try{
        const { instructorId } = req.params;
        const reviews = await Review.find(instructorId);
        res.status(200).json(reviews);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const createReviewCourse = async(req, res) => {
    try{
        const { 
            userId,
            courseId
        } = req.body;

        const newReview = new Course({
            userId,
            courseId
        })

        const review = await newReview.save()
        
        res.status(200).json(review);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const createReviewInstructor = async(req, res) => {
    try{
        const { 
            userId,
            instructorId
        } = req.body;

        const newReview = new Course({
            userId,
            instructorId
        })

        const review = await newReview.save()
        
        res.status(200).json(review);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const deleteReviewCourse = async(req, res) => {
    try{
        const { 
            _id,
            courseId
        } = req.body;

        await Review.findOneAndDelete({_id})
        const reviews = await Review.find({courseId})
        
        res.status(200).json(reviews);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const deleteReviewInstructor = async(req, res) => {
    try{
        const { 
            _id,
            instructorId
        } = req.body;

        await Review.findOneAndDelete({_id})
        const reviews = await Review.find({instructorId})
        
        res.status(200).json(reviews);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}
