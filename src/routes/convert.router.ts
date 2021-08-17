import express from 'express';
import { convertController } from "../api/convert.controller";

const postsRouter = express.Router();

postsRouter.get('/', convertController.convert);

module.exports = postsRouter
