const express = require('express');
const routes = express.Router();
const escola = require('../controllers/escola');

routes.get('/escolas', (request, response) => {
    escola.buscarEscolas().then(data => {
        response.json(200, data);
    }).catch(err => {
        response.send(503, err);
    })
});



module.exports = routes;