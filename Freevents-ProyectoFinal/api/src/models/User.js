const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        gender: {
            type: DataTypes.ENUM("femenino", "masculino"),
            allowNull: true
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
})}
