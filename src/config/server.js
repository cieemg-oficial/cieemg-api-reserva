require('dotenv/config');
const express = require('express');
const routes = require('../routes/routes');
const cors = require('./cors');
const server = express();

server.use(cors);

server.use(routes);

module.exports = {server}