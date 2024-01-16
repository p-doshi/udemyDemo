import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

const saltRounds = 10

export const registerUser = async(req, res) => {
    try {
        const {
            fullName,
            email,
            password,
        } = req.body

        const salt = await bcrypt.genSalt(saltRounds)
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullName,
            email,
            password: passwordHash,
        })

        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch(err) {
        console.error(err)
        res.status(500).json({message: err.message})
    }
}

export const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({email})
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


