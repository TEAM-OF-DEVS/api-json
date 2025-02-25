// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);
// server.listen(3001, () => {
//   console.log('JSON Server is running')
// });

// const jsonServer = require('json-server')
// const cors = require('cors')
// const path = require('path')

// const fs = require('fs')
// const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')))
// const server = jsonServer.create()
// const router = jsonServer.router(db)
// const middlewares = jsonServer.defaults()

// server.use(cors())
// server.use(jsonServer.bodyParser)
// server.use(middlewares)
// server.use(router)

// const PORT = 3001

// server.listen(PORT, () => {
//   console.log(`JSON Server is running on :${PORT}`)
// })

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

server.use(router);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`);
});
