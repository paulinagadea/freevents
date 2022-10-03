const { Op } = require('sequelize')
// const { Pack_Services } = require('../db')
const { Pack_services} =require('../db')

const getService_PackByName = async (name) => {

    const serviceByName = await Pack_services.findAll({
        where: { name: { [Op.iLike]: '%' + name + '%' } }
    })

    return serviceByName.length ? serviceByName : "Not found"
}

module.exports = { getService_PackByName }