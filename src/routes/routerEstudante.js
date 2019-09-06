const routes = require('../config/server').server;
const estudante = require('../controllers/estudante');

routes.get('/estudante', (request, response, next) => {
    estudante.buscarEstudantes().then(data => {
        response.send(200, data)
    }).catch(err => {
        response.send(503, err)
    });
    next();
});

routes.post('/cadastroEstudante', (request, response, next) => {
    estudante.cadastrarEstudante(request.body).then(data => {
        response.send(200, 'Estudante cadastrado');
    }).catch(err => {
        response.send(400, err)
    });
    next();
});


module.exports = routes;