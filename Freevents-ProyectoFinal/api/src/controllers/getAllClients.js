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

const getClientById = async (id) => {
    const clientId = await Client.findOne({
        where: { id: id }
    })
    console.log('✍', clientId)
    return clientId ? clientId : "Not found"
}



module.exports = { getAllClients, getClientByName, getClientById };