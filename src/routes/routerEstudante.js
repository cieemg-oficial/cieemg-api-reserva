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
        response.send(200, 'Cadastro realizado com sucesso!');
    }).catch(err => {
        response.send(400, err)
    });
    next();
});

routes.put('/atualizaEstudante', (request, response, next) => {
    estudante.cadastrarEstudante(request.body).then(data => {
        response.send(200, 'Dados atualizados com sucesso!');
    }).catch(err => {
        response.send(400, err);
    });
    next();
})

routes.del('/deletaEstudante', (request, reponse, next) => {
    estudante.deletaEstudante(request.body).then(data => {
        response.send(200, 'Dados excluidos com sucesso!');
    }).catch(err => {
        response.send(400, err);
    })
})


module.exports = routes;