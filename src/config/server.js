require('dotenv/config');
const express = require('express');
const routes = require('../routes/routes');
const cors = require('./cors');
const server = express();

server.use(cors);

server.use(routes);

// const cors = corsMiddleware.Options = {
//     preflightMaxAge: 5,
//     origins: ['*'],
//     allowHeaders: ['*'],
//     exposeHeaders: ['*']
// }

// server.pre(cors.preflightMaxAge);
// server.use(cors)

// server.use(restify.plugins.bodyParser({
//     mapParams: true,
//     mapFiles: false,
//     overrideParams: false
// }));

module.exports = {server}