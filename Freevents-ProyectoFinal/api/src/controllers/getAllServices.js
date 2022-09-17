const { Service } = require('../db')

const getAllServices = async () => {
    try {
        const service = await Service.findAll({

        });
        return service;
    } catch (error) {
        res.send(error);
    };
};

module.exports = { getAllServices } 