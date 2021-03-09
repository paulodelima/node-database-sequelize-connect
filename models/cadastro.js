const Sequelize = require('sequelize');

class Cadastro extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init(
            {
                descricao: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: false,
            },
        );
        return Cadastro;
    }
}
module.exports = (sequelize, DataTypes) => Cadastro.init(sequelize, DataTypes);
