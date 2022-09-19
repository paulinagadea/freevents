const { Service } = require('../db')

const getServiceById = async (id) => {

    const serviceId = await Service.findOne({
        where: { id: id }
    })
    console.log('✍', serviceId)
    return serviceId ? serviceId : "not found"
}

module.exports = { getServiceById }