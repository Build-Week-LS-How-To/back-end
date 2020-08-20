const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const frontEndRoutes = require('./front-end-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/frontend', frontEndRoutes);

server.get('/', (req, res) => {
  res.send('API up and running!')
})

module.exports = server;