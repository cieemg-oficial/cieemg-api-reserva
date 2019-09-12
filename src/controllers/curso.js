const model = require('../models/cursoModel');

function buscarCursos() {
    return new Promise((reject, resolve) => {
        model.findAll().then(res => {
            resolve(res);
        }).catch(err => {
            console.log('Error ao buscar dados: ')
            reject(err);
        })
    });
}


module.exports = { buscarCursos }