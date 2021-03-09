/* eslint-disable no-underscore-dangle */
const { DataTypes } = require('sequelize');
const _Cadastro = require('./cadastro');

function initModels(sequelize) {
    const Cadastro = _Cadastro(sequelize, DataTypes);

    return {
        Cadastro,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
