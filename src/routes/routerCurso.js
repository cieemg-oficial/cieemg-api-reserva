const express = require('express');
const routes =  express.Router();
const curso = require('../controllers/curso');

routes.get('/cursos', (req, res) => {
    curso.buscarCursos().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    })
});

module.exports = routes;