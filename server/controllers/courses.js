import Course from "../models/Course.js";

export const getCourse = async(req, res) => {
    try{
        const { id } = req.params;
        const course = await Course.findById(id);
        res.status(200).json(course);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const getAllCourses = async(req, res) => {
    try{
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const getCoursesByCategory = async(req, res) => {
    try{
        const { category } = req.params;
        const courses = await Course.find({category});
        res.status(200).json(courses);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const createCourse = async(req, res) => {
    try{
        const { 
            instructorId,
            title,
            description,
            category,
        } = req.body;

        const newCourse = new Course({
            instructorId,
            title,
            description,
            category,
        })

        const course = await newCourse.save()
        
        res.status(200).json(course);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const deleteCourse = async(req, res) => {
    try{
        const { 
            courseId
        } = req.body;

        await Course.findOneAndDelete({_id: courseId})
        const courses = await Course.find()
        
        res.status(200).json(courses);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}
