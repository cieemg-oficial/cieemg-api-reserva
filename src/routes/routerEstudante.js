const express = require('express');
const routes = express.Router();
const estudante = require('../controllers/estudante');

routes.get('/estudante', (req, res) => {
    estudante.buscarEstudantes().then(data => {
        res.send(200, data)
    }).catch(err => {
        res.send(503, err)
    });
});

routes.post('/cadastroEstudante', (req, res) => {
    estudante.cadastrarEstudante(req.body).then(data => {
        res.send(200, 'Cadastro realizado com sucesso!');
    }).catch(err => {
        res.send(400, err)
    });
});

routes.put('/atualizaEstudante', (req, res ) => {
    estudante.cadastrarEstudante(req.body).then(data => {
        res.send(200, 'Dados atualizados com sucesso!');
    }).catch(err => {
        res.send(400, err);
    });
})

routes.delete('/deletaEstudante', (req, res) => {
    estudante.deletaEstudante(req.body).then(data => {
        res.send(200, 'Dados excluidos com sucesso!');
    }).catch(err => {
        res.send(400, err);
    })
})


module.exports = routes;