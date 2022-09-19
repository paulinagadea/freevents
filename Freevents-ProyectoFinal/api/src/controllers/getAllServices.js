const { Service } = require('../db')

const getAllServices = async () => {
        const service = await Service.findAll();
        return service;
};

const getServiceByName = async (name) => {
        const allServices = await getAllServices();
        if (name) {
            const serviceName = allServices.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
            return serviceName;
        };
};

module.exports = { getAllServices, getServiceByName };