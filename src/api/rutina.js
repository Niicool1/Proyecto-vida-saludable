import axios from './axios'

export const getRutinaRequest = async (id) => axios.get(`/rutina/${id}`);

export const getRutinasRequest = async () => axios.get(`/rutinas`);

export const createRutinaRequest = async rutina => axios.post(`/rutina`, rutina);

export const updateRutinaRequest = async rutina => axios.put(`/rutina/${rutina._id}`, rutina);

export const deleteRutinaRequest = async (id) => axios.delete(`/rutina/${id}`);