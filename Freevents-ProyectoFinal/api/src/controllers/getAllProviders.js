const { Provider, Event, PAck } = require('../db')

const getAllProviders = async () => {
    const provedores = await Provider.findAll({
        include: [
            {
            model: Event,
            attributes: ['name'], 
            // through: {
            //     attributes: [],
            // }
            },
            {
            model: Pack_service,
            attributes: ['name'], 
            // through: {
            //     attributes: [],
            // }
            }
        ]
    })

    return provedores.length ? provedores : "not found"
}


module.exports = { getAllProviders }