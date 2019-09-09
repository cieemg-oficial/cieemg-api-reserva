const model = require('../models/escolaModel');


function buscarEscolas() {
    return new Promise((reject, resolve) => {
        model.findAll()
        .then( res => {
            resolve(res);
        }).catch(err => {
            console.error('error: ', err);
            reject(err);
        })
    });
}

function cadastraEscola(escola) {
    return new Promise((reject, resolve) => {
        model.create(escola)
        .then(res => {
            resolve(res);
        }).catch(err => {
            console.error('error: ', err);
            reject(err);
        })
    });
}

function atualizaEscola(escola) {
    return new Promise((reject, resolve) => {
        model.update(escola, {
            where: { id:escola.id }
        }).then(res =>{
            resolve(res);
        }).catch(err => {
            console.error('error: ', err);
            reject(err);
        })
    });
}

function deletaEscola(escola) {
    return new Promise((reject, resolve) => {
        model.destoy({where: {id:escola.id}})
        .then(res => {
            resolve(res)
        })
    })
}

module.exports = { buscarEscolas, cadastraEscola, atualizaEscola, deletaEscola }