import Rutina from "../models/rutina.model.js";

export const getRutinas = async (req, res) => {
    try {
        const rutina = await Rutina.find({
            user: req.user.id,
        });
        res.json(rutina);

    } catch (error) {
        return res.status(404).json({ message: "rutina no encontrada" });
    }

};

export const getRutina = async (req, res) => {
    try {
        const rutina = await Rutina.findById(req.params.id);
        if (!rutina)
            return res.status(404).json({ message: "Rutina no encontrada" });
        res.json(rutina);
    } catch (error) {
        return res.status(404).json({ message: "rutina no encontrada" });
    }
};

export const createRutina = async (req, res) => {
    try {
        const { dia, ejercicios } = req.body;
        const newRutina = new Rutina({
            dia,
            ejercicios,
            user: req.user.id,
        });
        const savedRutina = await newRutina.save();
        res.json(savedRutina);
    } catch (error) {
        return res.status(404).json({ message: "rutina no encontrada" });
    }

};

export const updateRutina = async (req, res) => {
    try {
        const rutina = await Rutina.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!rutina) return res.status(404).json({ message: "Rutina no encontrada" });
        res.json(rutina);
    } catch (error) {
        return res.status(404).json({ message: "rutina no encontrada" });
    }

};

export const deleteRutina = async (req, res) => {
    try {
        const rutina = await Rutina.findByIdAndDelete(req.params.id);
        if (!rutina) return res.status(404).json({ message: "Rutina no encontrada" });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "rutina no encontrada" });
    }

};
