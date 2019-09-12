const express = require('express');
const routes = express.Router();
const estudante = require('../controllers/estudante');

routes.get('/estudante', (req, res) => {
    estudante.buscarEstudantes().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
});

routes.post('/cadastroEstudante', (req, res) => {
    estudante.cadastrarEstudante(req.body).then(data => {
        res.status(200).send('Cadastro realizado com sucesso!');
    }).catch(err => {
        res.status(400).send(err)
    });
});

routes.put('/atualizaEstudante', (req, res ) => {
    estudante.cadastrarEstudante(req.body).then(data => {
        res.status(200).send('Dados atualizados com sucesso!');
    }).catch(err => {
        res.status(400).send(err);
    });
})

routes.delete('/deletaEstudante', (req, res) => {
    estudante.deletaEstudante(req.body).then(data => {
        res.status(200).send('Dados excluidos com sucesso!');
    }).catch(err => {
        res.status(400).send(err);
    })
})


module.exports = routes;