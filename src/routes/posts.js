import { isAuth } from '../middlewares/is-auth.js';

const posts = [
  {
    content: 'Hello World!',
  },
];

export async function postsRoutes(app) {
  app.get('/posts', { onRequest: [isAuth] }, (request, reply) => {
    return reply.status(200).send(posts);
  });

  app.post('/posts', { onRequest: [isAuth] }, (request, reply) => {
    const { username, title, content } = request.body;

    const post = {
      id: posts.length + 1,
      owner: username,
      title,
      content,
      date: new Date().toISOString(),
      comments: [],
      likes: [],
    };

    posts.push(post);

    return reply.status(201).send(post);
  });
}
