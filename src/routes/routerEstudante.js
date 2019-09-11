const express = require('express');
const routes = express.Router();
const estudante = require('../controllers/estudante');

routes.get('/estudante', (request, response) => {
    estudante.buscarEstudantes().then(data => {
        response.send(200, data)
    }).catch(err => {
        response.send(503, err)
    });
});

routes.post('/cadastroEstudante', (request, response) => {
    estudante.cadastrarEstudante(request.body).then(data => {
        response.send(200, 'Cadastro realizado com sucesso!');
    }).catch(err => {
        response.send(400, err)
    });
});

routes.put('/atualizaEstudante', (request, response ) => {
    estudante.cadastrarEstudante(request.body).then(data => {
        response.send(200, 'Dados atualizados com sucesso!');
    }).catch(err => {
        response.send(400, err);
    });
})

routes.delete('/deletaEstudante', (request, reponse) => {
    estudante.deletaEstudante(request.body).then(data => {
        response.send(200, 'Dados excluidos com sucesso!');
    }).catch(err => {
        response.send(400, err);
    })
})


module.exports = routes;