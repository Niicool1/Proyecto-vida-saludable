import axios from './axios'

export const getRutinaRequest = async (id) => axios.get(`/rutina/${id}`);

export const getRutinasRequest = async () => axios.get(`/rutinas`);

export const createRutinaRequest = async rutina => axios.post(`/rutina`, rutina);

export const updateRutinaRequest = async (id, rutina) => axios.put(`/rutina/${id}`, rutina);

export const deleteRutinaRequest = async (id) => axios.delete(`/rutina/${id}`);