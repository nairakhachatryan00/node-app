import { v4 as uuidv4 } from 'uuid';

 class PostService {
    private posts = [{
        title: 'Title',
        description: 'Description',
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b'
    }, {
        title: 'Title 2',
        description: 'Description 2',
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebaa11'
    }];

    constructor() {}

     getAll() {
        return this.posts;
    }

    add(post: any) {
        if(post.title || !post.description) {
            return 'Title and descriptions fields are required!';
        }
        post.id = uuidv4();
        this.posts.push(post);
        return this.posts;
    }

    getById(id: string) {
        let post = this.posts.filter(post => post.id === id)[0];
        return post;
    }

     update(id: string, body: any) {
         let post = this.getById(id);
         if(!post) {
           return;
         }
         let newPost = Object.assign(post, body);
         return newPost;

     }

     delete(id: string) {
         this.posts = this.posts.filter(post => post.id !== id);
         return this.posts;
     }
 }
export const postService = new PostService();
