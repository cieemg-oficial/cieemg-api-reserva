const express = require('express');
const routes = express.Router();
const escola = require('../controllers/escola');

routes.get('/escolas', (req, res) => {
    escola.buscarEscolas().then(data => {
        res.json(200, data);
    }).catch(err => {
        res.send(503, err);
    })
});



module.exports = routes;