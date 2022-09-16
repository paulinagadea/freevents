const { Provider } = require('../db')

const getAllProviders = async () => {
    const provedores = await Provider.findAll()
    return provedores.length ? provedores : "not found"
}

module.exports = { getAllProviders }