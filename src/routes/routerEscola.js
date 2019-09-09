const routes = require('../config/server').server;
const escola = require('../controllers/escola');

routes.get('/escolas', (request, response, next) => {
    escola.buscarEscolas().then(data => {
        response.send(200, data);
    }).catch(err => {
        response.send(503, err);
    })
    next();
});



module.exports = routes;