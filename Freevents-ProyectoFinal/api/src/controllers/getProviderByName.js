const { Op } = require('sequelize')
const { Provider, Event } = require('../db')

const getAllProviderByName = async (name) => {

    const provider = await Provider.findAll({
        where: { name: { [Op.iLike]: '%' + name + '%' } },
        include: {
            model: Event,
            attributes: ['name'], 
            through: {
                attributes: [],
            }}
    })
    console.log('esto es el controller provider', provider)
    return provider.length ? provider : []
}

module.exports = { getAllProviderByName }