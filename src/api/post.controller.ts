import { postService } from "../services/post.service";
import { Request, Response } from 'express';

class PostController {
    getAll = (req: Request, res: Response, next: any) => {
        res.send(postService.getAll());
    }

    create (req: Request, res: Response, next: any) {
        let post = req.body || {};
        let posts = postService.add(post);
        res.send(posts);
    };

    getById (req: Request, res: Response, next: any) {
        let id = req.params.id;
        let post = postService.getById(id);
        res.send(post);
    }

    update (req: Request, res: Response, next: any) {
        let id = req.params.id;
        let post = postService.update(id, req.body);
        res.send(post);
    }

    delete (req: Request, res: Response, next: any) {
        let id = req.params.id;
        let post = postService.delete(id);
        res.send(post);
    }
}

export const postController = new PostController();

