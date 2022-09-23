const { Pack_services, Event, Service } = require('../db')

const getAllPackServices = async () => {
    const allPacks = await Pack_services.findAll({
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
    }); 
    return allPacks; 
}; 

const getPacksByName = async (name) => {
    const allPacks = await getAllPackServices(); 
    if(name){
        const packsNAme = allPacks.filter(el => el.name.toLowerCase().includes(name.toLowerCase())); 
        return packsNAme; 
    } else {
        "not found"
    }
}; 

const getPacksById = async (id) => {
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
    getAllPackServices, 
    getPacksByName, 
    getPacksById
  
}