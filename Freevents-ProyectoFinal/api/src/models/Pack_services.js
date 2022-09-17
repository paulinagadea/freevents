
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('pack_services', {
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
        description: {
            type: DataTypes.TEXT, 
            allowNull: true,
        },
        price:{
            type: DataTypes.INTEGER, 
            allowNull: false,
        },
        status_enabled:{
            type: DataTypes.ENUM("disabled", "enabled")
        },
        galery_image: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        createdInDb: {
            type: DataTypes.BOOLEAN,
            allowNull: false, 
            defaultValue: true,
        }
    })
}
