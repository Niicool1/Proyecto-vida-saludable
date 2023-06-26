import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/deportivos")
        console.log("DB conectada")
    } catch (error) {
        console.log(error);
    }

};