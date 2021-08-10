import express, { Express } from "express";
import dotenv from 'dotenv';
import cors from 'cors';

import compression from 'compression';

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const getApp = (): Express => {
    const app = express();

    app.disable('x-powered-by')
    app.use(express.json());

    app.use(cors());

    app.get('/ping', (req, res) => {
        res.send('pong')
    })

    app.post('/', (req, res) => {

    })

    return app;
}
