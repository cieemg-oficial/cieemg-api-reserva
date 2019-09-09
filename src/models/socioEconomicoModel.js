const mysql = require('../config/mysql');
const type = require('sequelize');

let socioEconomicoModel = mysql.define('socioeconomico', {
    id: {
        type: type.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    rendafamiliar:{
        type: type.STRING(1),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    situacaoresidencia: {
        type: type.STRING(1),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    situacaohabitacional: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    valoraluguel: {
        type: type.DECIMAL(10, 2),
        allowNull: true,
    },
    atividade1: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tipoatividade1: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    rendaatividade1: {
        type: type.DECIMAL(10, 2),
        allowNull: true,
    },
    nomequemcontribui: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    atividade2: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tipoatividade2: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    rendaatividade2: {
        type: type.DECIMAL(10, 2),
        allowNull: true,
    },
    atividade3: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tipoatividade3: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    rendaatividade3: {
        type: type.DECIMAL(10, 2),
        allowNull: true,
    },
    atividade4: {
        type: type.STRING(255),
        collate:'latin1_swedish_ci',
        allowNull: true,
    },
    tipoatividade4: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    rendaatividade4: {
        type: type.DECIMAL(10, 2),
        allowNull: true,
    },
    atividade5: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tipoatividade5: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    rendaatividade5: {
        type: type.DECIMAL(10, 2),
        allowNull: true,
    },
    quemmaiscontribui: {
        type: type.STRING(1),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    pessoasvivemdarenda: {
        type: type.STRING(1),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tipodeensino: {
        typo: type.STRING(1),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tipoecola: {
        type: type.STRING(1),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    beneficiarioprogramasocial: {
        type: type.STRING(1),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    programasocial: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    estudante_id: {
        type: type.INTEGER(11),
        allowNull: false,
    },
    cursoprofissionalizante: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    participacao_economica: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    experiencia_atividades: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    experiencia_cargo: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    experiencia_dt_final: {
        type: type.STRING(45),
        collate: 'latin1_bin',
        allowNull: true,
    },
    experiencia_dt_inicial: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    experiencia_empresa: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    experiencia: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    trabalho_mae: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    trabalho_mae_outro: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    trabalho_pai: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    trabalho_pai_outro: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    locomocao: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    especificar_locomocao: {
        type: type.STRING(100),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    automovel: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    internet: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tv_assinatura: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    dvd: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    maquina: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    computador: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    celular: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tv: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    radio: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    geladeira: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    quem_mora_filhos: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    quem_mora_esposa: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    quem_mora_mae: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    quem_mora_outros: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    quem_mora_amigos: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    quem_mora_pai: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    quem_mora_outros_parentes: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    quem_mora_irmao: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    numero_pessoas_morram: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    situacao_residencia_descricao: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    situacao_residencia_por_quem: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    onde_mora_situacao: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    onde_mora: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tratamento_saude_descricao: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tratamento_saude: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    conheceu_ciee: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    especificar_conheceu_ciee: {
        type: type.STRING(100),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    cor_pele: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    adicinal: {
        type: type.STRING(145),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_bolsa_familia: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_prouni: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_fies: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    projeto_social_outro: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    filhos: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_BPC: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_poupanca_jovem: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_meio_passe_estudantil: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_projovem: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_pronatec: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_bolsa_familia_valor: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_prouni_valor: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_fies_valor: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_outro_descricao: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_nenhum: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tipoensino_tecnico_descricao: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tipoensino_outro_descricao: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tipoensino_reinventando_area: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    regiao_onde_mora: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    onde_mora_outra_descricao: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    telefone: {
        type: type.STRING(45),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    possui_imovel_gera_renda: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    quem_possui_imovel_gera_renda: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    quem_possui_imovel_gera_renda_quem: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tipo_imovel_gera_renda: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    empresa_propria_tipo: {
        type: type.INTEGER(2),
        allowNull: true,
    },
    quantidade_imovel_renda: {
        type: type.STRING(100),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    preco_imovel_renda: {
        type: type.STRING(200),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    recebe_pensao_alimenticia: {
        type: type.STRING(200),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    recebe_pensao_alimenticia_quem: {
        type: type.STRING(200),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    recebe_pensao_falecimento: {
        type: type.STRING(200),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    recebe_pensao_falecimento_quem: {
        type: type.STRING(200),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    recebe_pensao_falecimento_valor: {
        type: type.STRING(200),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    escolaridade_mae: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tipo_imovel_gera_renda_tipo: {
        type: type.STRING(100),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    mae_sabe_ler: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    p_social_ajuda_financeira_quem: {
        type: type.STRING(200),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    deficiencia: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    projeto_social_cesta_basica: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    projeto_social_ajuda_financeira: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    deficiencia_familiar: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    deficiencia_familiar_quem: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tratamento_saude_qual: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tratamento_saude_remedio: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    frequencia_remedio: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tratamento_interfere_vida: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tratamento_interfere_vida_valor: {
        type: type.STRING(50),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tratamento_saude_parente: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tratamento_saude_parente_qual: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    tratamento_saude_parente_quem: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true,
    },
    frequencia_remedio_parente: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    frequencia_remedio_parente_qual: {
        type: type.STRING(255),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    tratamento_parente_interfere_vida: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    tratamento_parente_interfere_vida_forma: {
        type: type.STRING(200),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    sexo_biologico: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    genero: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    idade: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    etnia: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    estado_civil: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    filhos_idade: {
        type: type.STRING(200),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    filhos_auxilio_financeiro: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    filhos_auxilio_financeiro_valor: {
        type: type.STRING(100),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    motivo_trabalho: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    participacao_mae: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    participacao_mae_outro: {
        type: type.STRING(100),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    participacao_pai: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    realacionamento_familiar: {
        type: type.STRING(2),
        collate: 'latin1_swedish_ci',
        allowNull: true
    },
    sustento_familia: {

    },
    sustento_familia_outro: {

    },
    usa_drogas: {

    },
    usa_drogas_quais: {

    },
    usa_drogas_frequencia: {
        
    }



})