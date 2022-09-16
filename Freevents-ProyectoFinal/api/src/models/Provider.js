const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('provider', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false, 
        },
        location:{
            type: DataTypes.STRING, 
            allowNull: false, 
        },
        postal_code: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        cuit: { 
            type: DataTypes.INTEGER, 
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
};