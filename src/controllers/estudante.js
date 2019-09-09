const model = require('../models/estudanteModel');
const msaccess = require('../config/msaccess');

function buscarEstudantes(){
    return new Promise((resolve, reject) => {
        model.findAll({
            where: {
                id: '269896355'
            }
        }).then(result =>{
            resolve(result)
        }).catch(err => {
            console.error('error: ', err);
            reject(err)
        })
    });
}

function cadastrarEstudante(estudante){
    return new Promise((resolve, reject) => {
        model.create(estudante).then(res => {
            resolve(res)        
        }).catch(err => {
            console.error('error: ', err)
            reject(err)
        })
    });
}

function atualizaEstudante(estudante){
    return new Promise((resolve, reject) => {
        model.update(escola, {
            where: {id:escola.id}
        }).then(res => {
            resolve(res);
        }).catch(err => {
            console.error('error: ', err);
            reject(err);
        })
    });
}

function deletaEstudante(estudante){
    return new Promise((resolve, reject) => {
        model.destroy({ where:{ id:estudante.id }})
        .then(res => {
            resolve(res);
        }).catch(err => {
            console.error('error: ', err);
            reject(err);
        })
    })
}

module.exports = { buscarEstudantes, cadastrarEstudante, atualizaEstudante, deletaEstudante }