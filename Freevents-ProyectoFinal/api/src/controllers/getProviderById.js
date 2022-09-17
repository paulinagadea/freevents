const { Provider } = require('../db')

const getProviderById = async (id) => {

    const providerId = await Provider.findOne({
        where: { id: id }
    })
    console.log('esto es el controller providerId', providerId)
    return providerId ? providerId : "not found"
}

module.exports = { getProviderById }