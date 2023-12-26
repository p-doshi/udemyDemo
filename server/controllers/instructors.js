import Instructor from "../models/Instructor.js";

export const getInstructor = async(req, res) => {
    try{
        const { id } = req.params;
        const user = await Instructor.findById(id);
        res.status(200).json(user);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const getAllInstructors = async(req, res) => {
    try{
        const users = await Instructor.find();
        res.status(200).json(users);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}
