const mysql = require('../config/mysql');
const type = mysql.Sequelize;

let escolaModel = mysql.define('escola', {
    id:{ 
        type: type.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
    },
    razaosocial: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    cnpj: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    logradouro: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    numero: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    complemento: {
      type: type.STRING(255),
      collate: 'latin1_swedish_ci',
      allowNull: true  
    },
    cep: {
        type: type.STRING(10),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    telefone: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    nomecontato: {
        type: type.STRING(100),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    email: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    importado: {
        type: type.INTEGER(4),
        defaultValue: '0',
        allowNull: false,
    },
    senha: {
        type: type.STRING(255),
        allowNull: false,
        collate: 'latin1_swedish_ci'
    },
    // created_at: {
    //     type: type.DATE,
    //     allowNull: true,
    // },
    // updated_at: {
    //     type: type.DATE,
    //     allowNull: true,
    // },
    cidade: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    bairro: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    codescola: {
        type: type.STRING(10),
        collate: 'latin1_swedish_ci',
        allowNull: true
    }
});

module.exports = escolaModel;