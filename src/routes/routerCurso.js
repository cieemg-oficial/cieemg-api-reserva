const express = require('express');
const routes =  express.Router();
const curso = require('../controllers/curso');

routes.get('/cursos', (req, res) => {
    curso.buscarCursos().then(cursos => {
        res.status(200).json({
            error: false,
            data: cursos
        });
    }).catch(err => {
        res.status(503).send(err);
    })
});

module.exports = routes;