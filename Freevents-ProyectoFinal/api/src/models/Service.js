const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('service', {

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
            allowNull: false,
        },
        type_service: {
            type: DataTypes.ENUM(
                "catering",
                "sonido",
                "decoracion",
                "dj",
                "arreglos_florales",
                "fotografo",
                "salon_de_evento",
                "servicio_de_traslado",
                "bar",
                "show",
                "entretenimiento_en_vivo",
                "disfraz_y_cotillon",
                "staff"
            ),
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        createdInDb: {
            type: DataTypes.BOOLEAN,
            allowNull: false, 
            defaultValue: true,
        }
    })

}