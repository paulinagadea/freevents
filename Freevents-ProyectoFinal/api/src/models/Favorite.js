const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('favorite', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        user_provider: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        event: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    })

}