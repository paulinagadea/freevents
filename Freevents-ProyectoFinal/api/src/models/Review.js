const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('review', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comments: {
            type: DataTypes.TEXT, 
            allowNull: true,
        },
    })

}