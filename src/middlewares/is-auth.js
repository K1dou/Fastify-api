export function isAuth(request, reply, done) {
  const { authorizaztion } = request.headers;

  if (authorizaztion !== '12345') {
    reply.status(403).send({ message: 'Unauthorized' });
  }

  done();
}
