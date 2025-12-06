import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.route.js';

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

//Routes
app.use('/auth/v1/', authRoute);

app.get('/', (req, res) => {
    res.send('Portfolio Backend Running...');
});

export default app;