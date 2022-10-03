const { Pack_services, Event, Service, Provider } = require('../db');

const getPack_serviceByID = async (id) => {
    const totalPacks = await Pack_services.findOne({
        where: { id: id },
        include: [
            {
                model: Event,
                attributes: ['name'], 
                through: {
                    attributes: [],
                }
            },
            {
                model: Service,
                attributes: ['name', 'image'], 
                through: {
                    attributes: [],
                }
            },
        ]
    })
    return totalPacks ? totalPacks : "Not found." 
}
module.exports = {
    getPack_serviceByID
}