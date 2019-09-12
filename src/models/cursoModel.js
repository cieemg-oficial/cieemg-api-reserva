const mysql = require('../config/mysql');
const type = mysql.Sequelize;

const cursoModel = mysql.define('curso',{
    id : {
        type: type.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    idescola: {
        type: type.INTEGER(11),
        allowNull: true
    },
    idcurso: {
        type: type.INTEGER(11),
        allowNull: true
    },
    descricao: {
        type: type.STRING(70),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    duracao: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true
    }
});

module.exports = cursoModel;