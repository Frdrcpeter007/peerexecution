const express = require('express');
const { ExpressPeerServer } = require('peer');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res, next) => {
  
  res.status(200).send({port: server.address().port})
});

const http = require('http');

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/myapp'
});

app.use('/peerjs', peerServer);

server.listen(process.env.PORT || 5432);