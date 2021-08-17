import express from 'express';
import { postController } from "../api/post.controller";

const postsRouter = express.Router();

postsRouter.get('/', postController.getAll);
postsRouter.post('/', postController.create);
postsRouter.get('/:id', postController.getById);
postsRouter.patch('/:id', postController.update);
postsRouter.delete('/:id', postController.delete);

module.exports = postsRouter
