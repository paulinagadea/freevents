const { Provider, Event } = require('../db')

const getAllProviders = async () => {
    const provedores = await Provider.findAll({
        include: {
            model: Event,
            attributes: ['name'], 
            through: {
                attributes: [],
            }
        }
    })
    return provedores.length ? provedores : "not found"
}


module.exports = { getAllProviders }