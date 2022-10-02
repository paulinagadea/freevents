const { Client } = require('../db')

const getAllClients = async () => {
    const clientes = await Client.findAll()

    return clientes.length ? clientes : "not found"
}


module.exports = { getAllClients }