const { Op } = require('sequelize')
const { Pack_Service } = require('../db')

const getServicePackByName = async (name) => {

    const serviceByName = await Client.findAll({
        where: { name: { [Op.iLike]: '%' + name + '%' } }
    })

    return serviceByName.length ? serviceByName : "Not found"
}

module.exports = { getServicePackByName }