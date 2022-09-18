const { Router } = require('express');
const router = Router()
const { Client } = require('../db')

router.post("/", async (req, res) => {
    const {name, lastname, password, gender, dni, email, phone_number} = req.body;
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
    catch(error) { 
        console.log(error)
        res.status(400).send("Bad request.")
    }
})

module.exports = router