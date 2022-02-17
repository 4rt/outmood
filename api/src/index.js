const http = require('http');
const express = require('express');
const { PORT } = require('./config');
const {Server: httpServer} = require('http');

const app = express();

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started - http://localhost:${ PORT }`);
});
