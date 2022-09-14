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
            type: DataTypes.INTEGER,
            allowNull: false, 
        },
        status:{
            type: DataTypes.ENUM("fulfilled", "pending", "canceled", "cart")
        },
        event_date: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        event_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment_method: {
            type: DataTypes.ENUM("credit_card", "debit")
        }
    })

}