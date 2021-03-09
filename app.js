const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

const environment = process.env.ENV || 'development';
const config = require('./config/config')[environment];
const { initModels } = require('./models/init-models');

const db = {};

// Cores para console
// Referência >> https://imasters.com.br/desenvolvimento/como-criar-um-console-colorido-usando-nodejs
const resetColor = '\u001b[0m';
const red = '\033[31m';
const redBold = '\033[1;31m';
const green = '\033[0;32m';
const greenBold = '\033[1;32m';
const yellow = '\033[0;33m';


async function initialize() {
    // Informa qual ambiente está conectato
    console.info(`${greenBold}\n[√] ${yellow}Ambiente que aplicação está rodando >> ${green}${environment}${resetColor}`);

    const { host, port, user, password, database } = config.database;

    try {
        // Conexão através de url
        // const connection = await mysql.createConnection(`mysql://${user}:${password}@${host}:${port}/${database}`);

        // OU Conexão com envio de parâmetros
        const connection = await mysql.createConnection({host, port, user, password});
    } catch (error) {
        console.error(`\n${redBold}** ATENÇÃO ** ${resetColor}Erro na conexão MySQL\n\n ${red}`, error, `\n${resetColor}`);
        return;
    }    
    console.info(`${green}\n[√] ${yellow}MySQL conectado${resetColor}`);

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // Conecta com banco de dados via sequelize
    const sequelize = new Sequelize(database, user, password, {
        dialect: 'mysql',
        logging: false,
    });

    // Inicia modelos e adiciona os mesmos para o objeto exportado "db"
    db.Cadastro = initModels(sequelize).Cadastro;

    // sync all models with database
    await sequelize.sync();
    console.info(`${green}\n[√] ${yellow}Sequelize inicializado e sincronizado \n${resetColor}`);
}

initialize();

module.exports = db;
