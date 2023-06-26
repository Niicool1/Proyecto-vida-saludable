import Rutina from "../models/rutina.model.js";

export const getRutinas = async (req, res) => {
    const rutina = await Rutina.find({
        user: req.user.id
    });
    res.json(rutina);
};

export const getRutina = async (req, res) => {
    const rutina = await Rutina.findById(req.params.id);
    if (!rutina) return res.status(404).json({ message: "Rutina no encontrada" });
    res.json(rutina);
};

export const createRutina = async (req, res) => {
    const { dia, ejercicios } = req.body;
    const newRutina = new Rutina({
        dia,
        ejercicios,
        user: req.user.id,
    });
    const savedRutina = await newRutina.save();
    res.json(savedRutina);
};

export const updateRutina = async (req, res) => {
    const rutina = await Rutina.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!rutina) return res.status(404).json({ message: "Rutina no encontrada" });
    res.json(rutina);
};

export const deleteRutina = async (req, res) => {
    const rutina = await Rutina.findByIdAndDelete(req.params.id);
    if (!rutina) return res.status(404).json({ message: "Rutina no encontrada" });
    return res.sendStatus(204);
};
