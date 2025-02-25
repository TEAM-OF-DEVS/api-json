// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);
// server.listen(3001, () => {
//   console.log('JSON Server is running')
// });

const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router({ posts: [], users: [] }); // Dados apenas em memória
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server rodando na porta ${PORT}`);
});
