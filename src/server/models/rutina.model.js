import mongoose from "mongoose";

const rutinaSchema = new mongoose.Schema({
    dia: {
        type: String,
        required: true,
    },
    ejercicios: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

export default mongoose.model("Rutinas", rutinaSchema);
