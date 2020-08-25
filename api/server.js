const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js')
const howToRouter = require('./howTo-router.js')

const server = express();

// server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', authRouter)
server.use('/api/howTo', howToRouter);

server.get('/', (req, res) => {
  res.send('API up and running!')
})

module.exports = server;