import express from "express";
import cookieParser from 'cookie-parser';


import authRoutes from './routes/auth.routes.js'
import rutinaRoutes from './routes/rutina.routes.js'

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", rutinaRoutes);


export default app;