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

const updateProvider = async (id) => {

    const updateProvider = await Provider.update({
        where: { id: id }
    })
    console.log('updateProvider', updateProvider)
    return updateProvider ? updateProvider : "Not updateProvider"
}

module.exports = { getAllProviders, updateProvider }