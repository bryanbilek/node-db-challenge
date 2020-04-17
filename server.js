const express = require('express');
const server = express();
const helmet = require('helmet');

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send('<h2>Welcome To Sprint DB API!</h2>');
});

module.exports = server;