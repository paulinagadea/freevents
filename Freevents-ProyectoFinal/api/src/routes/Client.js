const { Router } = require('express');
const { getAllClients, getClientByName } = require('../controllers/getAllClients.js');
const router = Router()
const { Client } = require('../db')

router.get('/admin', async (req, res) => {
    
    const { name } = req.query;
    // Si no recibo un nombre por query muestro todos los servicios.
    try {
        if (!name) {
            const clients = await getAllClients();
            res.status(200).send(clients);
        } else {
            const client = await getClientByName(name);
            if (client.length) {
                res.status(200).send(client);
            } else {
                res.status(404).send("User not found");
            };
        };
    } catch(error) {
        res.send(error);
    };
});


router.post("/", async (req, res) => {
    const { name, lastname, password, gender, dni, email, phone_number } = req.body;
    console.log('llega?', req.query)
    try {
        const clientCreated = await Client.create({
            name,
            lastname,
            password,
            gender,
            dni,
            email,
            phone_number
        })
        res.status(200).send(clientCreated);
    }
    catch (error) {
        console.log(error)
        res.status(400).send("Bad request.")
    }
})

router.put("/:id", async (req, res) => {
    
    await Client.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ succes: 'se han modificado los datos' })
})

module.exports = router