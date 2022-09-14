const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('order', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        subtotal: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        paymen_method: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        direction: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },

        data_service: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
       
    })

}