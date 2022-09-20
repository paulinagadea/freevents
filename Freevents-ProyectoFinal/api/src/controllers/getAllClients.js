const { Client } = require('../db')

const getAllClients = async () => {
    const client = await Client.findAll();
    return client;
};

const getClientByName = async (name) => {
    const allClients = await getAllClients();
    if (name) {
        const clientName = allClients.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        return clientName;
    };
};

module.exports = { getAllClients, getClientByName };