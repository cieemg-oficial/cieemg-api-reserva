require('dotenv/config');
const restify = require('restify');

const port = process.env.porta;
const server = restify.createServer();

server.use(restify.plugins.bodyParser({
    mapParams: true,
    mapFiles: false,
    overrideParams: false
}));

module.exports = {server, port}