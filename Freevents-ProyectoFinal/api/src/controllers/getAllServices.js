const { Service } = require('../db')

const getAllServices = async () => {
        const service = await Service.findAll();
        return service;
};

module.exports = { getAllServices } 