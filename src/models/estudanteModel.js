const mysql = require('../config/mysql');
const type = require('sequelize');

let estudanteModel = mysql.define('estudante', {
    id: {
        type: type.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    cpf: {
        type: type.STRING(14),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    logradouro: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    numero: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    complemento: {
        type: type.STRING(255),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    cep: {
        type: type.STRING(10),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    telefone: {
        type: type.STRING(45),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    email: {
        type: type.STRING(45),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    cidade: {
        type: type.STRING(255),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    bairro: {
        type: type.STRING(255),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    senha: {
        type: type.STRING(255),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    nomepai: {
        type: type.STRING(255),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    nomemae: {
        type: type.STRING(255),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    estadocivil: {
        type: type.STRING(1),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    sexo: {
        type: type.STRING(1),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    dt_nascimento: {
        type: type.DATE,
        allowNull: true,
    },
    horario: {
        type: type.STRING(20),
        collate:'latin1_swedsh_ci',
        allowNull: true,
    },
    rg: {
        type: type.STRING(45),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    orgaoexpedidor: {
        type: type.STRING(45),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    periodoano: {
        type: type.STRING(2),
        collate: 'latin1_swedsh_ci',
        allowNull: false,
    },
    previsaoformatura: {
        type: type.STRING(8),
        collate:'latin1_swedsh_ci',
        allowNull: false,
    },
    curso_id: {
        type: type.INTEGER(11),
        allowNull: false,
    },
    escola_id: {
        type: type.INTEGER(11),
        allowNull: false,
    },
    dt_cadastro: {
        type: type.DATE,
        allowNull: false,
    },
    uf: {
        type: type.STRING(2),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    idade: {
        type: type.DATE,
        allowNull: true,
    },
    estagiario_ativo: {
        type: type.STRING(1),
        collate: 'latin1_swedsh_ci',
        allowNull: false,
    },
    dt_atualizacao: {
        type: type.DATE,
        allowNull: true,
    },
    periodo: {
        type: type.TINYINT(4),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    ano: {
        type: type.INTEGER(11),
        allowNull: true,
    },
    previsao_semestre: {
        type: type.TINYINT(1),
        allowNull: true,
    },
    previsao_ano: {
        type: type.INTEGER(4),
        allowNull: true,
    },
    previsao_mes: {
        type: type.TINYINT(2),
        allowNull: true,
    },
    deficiencia: {
        type: type.STRING(2),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    deficiencia_descricao: {
        type: type.STRING(255),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    telefone1: {
        type: type.STRING(20),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    telefone2: {
        type: type.STRING(20),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    ctps: {
        type: type.STRING(20),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    candidato_selecionado: {
        type: type.INTEGER(11),
        allowNull: true,
    },
    anoingresso: {
        type: type.INTEGER(11),
        allowNull: true,
    },
    semestreingresso: {
        type: type.INTEGER(11),
        allowNull: true,
    },
    cpf_pai: {
        type: type.STRING(14),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    cpf_mae: {
        type: type.STRING(14),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    notificacao: {
        type: type.STRING(2),
        collate: 'latin1_swedsh_ci',
        allowNull: true,
    },
    dt_alteracao_notificacao: {
        type: type.DATE,
        allowNull: true,
    },    
})

module.exports = estudanteModel;
