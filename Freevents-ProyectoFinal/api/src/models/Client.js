const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('client', {
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
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dni: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        createdInDb: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true,
        },
        userType: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "client",
        },
        status: {
            type: DataTypes.ENUM("disabled", "enabled"),
            defaultValue: "enabled",
            allowNull: true,
        },
        sub: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    },
        {
            freezeTableName: true
        }
    )
};
