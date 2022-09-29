const Clien = require('express').Router();
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { getAllClients, getClientByName, getClientById } = require('../controllers/getAllClients.js');
const { Client } = require('../db')
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

Clien.get('/', async (req, res) => {
    
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

Clien.get('/:id', async (req, res) => {
    
    try {
        const { id } = req.params
        const clientById = await getClientById(id)

        console.log('clientId', clientById)

        res.status(200).json(clientById)

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})

//crear cliente 
Clien.post("/", async (req, res) => {
    
//primero busco al cliente con los datos que me mandaron Where: findOne(email === email.dataBase)
//if cliente (existe) => regresa "el cliente ya existe"
//else (no existe), frontend ponerle a llenar el componente formulario 


    const { name, lastname, passwordHash_client, dni, email, phone_number } = req.body;
    console.log('llega?', req.query)
    try {
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(passwordHash_client, saltRounds)
        
        const clientCreated = await Client.create({
            name,
            lastname,
            passwordHash,
            dni,
            email,
            phone_number
        })
        
        const savedClient = await clientCreated.save();

        res.status(200).json(savedClient);
    }
    catch (error) {
        console.log(error)
        res.status(400).send("Bad request.")
    }

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

    oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

    async function sendMail() {
        try {

            const accessToken = await oAuth2Client.getAccessToken()
           
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: "kristhianlizcano@gmail.com",
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken,


                },
            })
            
            const mailOptions = {
                from: "Freevents <kristhianlizcano@gmail.com>",
                to: email,
                subject: "Freevents",
                text: "BIENVENIDO A FREEVENTS", 
                
      
                
            }; 

            const result = await transporter.sendMail(mailOptions);
            return result;
        }
        catch(error) {
            console.log(error);
        }
    } 

    sendMail()
    .then(result => res.status(200).send("Enviado"))
    .catch(error => console.log(error));

})

Clien.put("/:id", async (req, res) => {

         try{
             
            await Client.update(req.body, {
                        where: { id: req.params.id }
                    });
                    res.status(200).json({ succes: 'Update Client' })
        
        } catch(error) {

            res.status(500).json({ message: 'Error', error })

        }
        
})

Clien.delete("/admin/:id", async (req, res) => {

    try {
        await Client.destroy({
                    where: { id: req.params.id }
                });
                res.status(200).json({ success: 'Delete Client' })

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})




module.exports = Clien;