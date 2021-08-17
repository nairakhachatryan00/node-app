import express, { Express } from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
const postsRoute = require('./routes/post.router');

dotenv.config();


export const getApp = (): Express => {
    const app = express();

    app.disable('x-powered-by')
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.use(cors());

    app.use('/posts', postsRoute);

    return app;
}
