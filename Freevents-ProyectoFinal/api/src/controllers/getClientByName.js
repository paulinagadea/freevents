const { Op } = require('sequelize')
const { Client } = require('../db')

const getClientByName = async (name) => {

    const client = await Client.findAll({
        where: { name: { [Op.iLike]: '%' + name + '%' } }
    })

    return client.length ? client : "Not found"
}

module.exports = { getClientByName }