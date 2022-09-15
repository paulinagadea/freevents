const { Provider } = require('../db')

const getAllProvider = async () => {
    try {
        const provider = await Provider.findAll({
            // order: [['name', 'ASC']],
            // include: { model: Pack_services, attributes: ['name'] }
        })
        return provider
    } catch (error) {
        console.log('error:', error)
    }
}

module.exports = { getAllProvider }