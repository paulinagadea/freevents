const { Client } = require('../db')

const getClientById = async (id) => {
    const clientId = await Client.findOne({
        where: { id: id }
    })
    return clientId ? clientId : "Not found"
}

module.exports = { getClientById }