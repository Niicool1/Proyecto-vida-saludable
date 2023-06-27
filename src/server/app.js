import express from "express";
import cookieParser from 'cookie-parser';


import authRoutes from './routes/auth.routes.js'
import rutinaRoutes from './routes/rutina.routes.js'
import cors from 'cors'

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json());

app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", rutinaRoutes);




export default app;