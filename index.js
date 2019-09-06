const server = require('./src/config/server').server;
const port = require('./src/config/server').port;
const routes = require('./src/routes/routes');

server.listen(port, (routes) => {
    console.log(`restify is running on port: ${port}`);
});
