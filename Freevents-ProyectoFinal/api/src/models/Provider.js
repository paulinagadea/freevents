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
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postal_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cuit: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        passwordHash_provider: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        phone_number: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        logotype: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        background_image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        galery_image: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        createdInDb: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        user_provider: {
            type: DataTypes.STRING,
            allowNull: false, 
            defaultValue: "provider",
        },
        sub: {
            type: DataTypes.STRING,
            allowNull: true, 
        }
    },
        {
            freezeTableName: true
        });
};