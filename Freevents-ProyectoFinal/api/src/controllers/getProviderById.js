const { Provider } = require('../db')

const getProviderById = async (id) => {

    const providerId = await Provider.findOne({
        where: { id: id }
    })
    return providerId ? providerId : "not found"
}

module.exports = { getProviderById }