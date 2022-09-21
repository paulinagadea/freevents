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
    return clientId ? clientId : "not found"
}

const updateClient = async (id) => {
    const clientPutId = await Client.update({
        where: { id: id }
    })
    console.log('Actualizado', clientPutId)
    return clientPutId ? clientPutId : "No actualizado"
}

const deleteClient = async (id) => {
    const deleteClientId = await Client.destroy({
        where: { id: id }
    })
    console.log('Delete', deleteClientId)
    return deleteClientId ? deleteClientId : "Not Delete"
}

module.exports = { getAllClients, getClientByName, getClientById, updateClient, deleteClient };