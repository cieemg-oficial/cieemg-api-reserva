require('dotenv/config')
const server = require('./src/config/server').server;




server.listen(process.env.porta);
