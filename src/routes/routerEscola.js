const express = require('express');
const routes = express.Router();
const escola = require('../controllers/escola');

routes.get('/escolas', (req, res) => {
    escola.buscarEscolas().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    })
});



module.exports = routes;