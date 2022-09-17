const { Op } = require('sequelize')
const { Provider } = require('../db')

const getAllProviderByName = async (name) => {

    const provider = await Provider.findAll({
        where: { name: { [Op.iLike]: '%' + name + '%' } },
    })
    console.log('esto es el controller provider', provider)
    return provider.length ? provider : "not found"
}

module.exports = { getAllProviderByName }