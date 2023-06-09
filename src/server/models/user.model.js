import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    rut: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    Rol: {
        type: String,
        default: "user"
    }

}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)