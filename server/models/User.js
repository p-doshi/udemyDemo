import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 25
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 25
        },
        email: {
            type: String,
            required: true,
            max: 25,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 8,
        },
        picturePath: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
