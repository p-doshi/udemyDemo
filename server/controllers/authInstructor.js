import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Instructor from "../models/Instructor.js"

const saltRounds = 10

export const registerInstructor = async(req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            country,
            age,
            educationLevel,
        } = req.body

        const salt = await bcrypt.genSalt(saltRounds)
        const passwordHash = await bcrypt.hash(password, salt)

        const newInstructor = new Instructor({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            country,
            age,
            educationLevel,
        })

        const savedInstructor = await newInstructor.save()
        res.status(201).json(savedInstructor)
    } catch(err) {
        console.error(err)
        res.status(500).json({message: err.message})
    }
}

export const loginInstructor = async(req, res) => {
    try {
        const {email, password} = req.body

        const user = await Instructor.findOne({email})
        if (!user) {return res.status(400).json({message: "User does not exist"})}

        const match = await bcrypt.compare(password, user.password)
        if (!match) {return res.status(400).json({message: "Ivalid credentials"})}

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        delete user.password;

        res.status(200).json({ token, user });

    } catch(err) {
        console.error(err)
        res.status(500).json({message: err.message})
    }
}


