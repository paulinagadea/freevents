const Cliente = require('express').Router();
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { getAllClients } = require('../controllers/getAllClients');
const { getClientByName } = require('../controllers/getClientByName');
const { getClientById } = require('../controllers/getClientById');
const { Client } = require('../db')
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

Cliente.get('/', async (req, res) => {
    try {
        const { name } = req.query
        const allClients = await getAllClients()
        const clientByName = await getClientByName(name)

        name ?
            res.status(200).json(clientByName)
            : res.status(200).json(allClients)

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error', error })
    }
});

Cliente.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const clientById = await getClientById(id)

        res.status(200).json(clientById)

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error', error })
    }
})

//crear cliente 
Cliente.post("/", async (req, res) => {

    //primero busco al cliente con los datos que me mandaron Where: findOne(email === email.dataBase)
    //if cliente (existe) => regresa "el cliente ya existe"
    //else (no existe), frontend ponerle a llenar el componente formulario 


    const { name, lastname, password, dni, email, phone_number, sub, status } = req.body;
    console.log('llega?', req.query)
    try {
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)

        const clientCreated = await Client.create({
            name,
            lastname,
            passwordHash,
            dni,
            email,
            phone_number,
            sub,
            status
        })

        const savedClient = await clientCreated.save();

        res.status(200).json(savedClient);
    }
    catch (error) {
        console.log(error)
        res.status(400).send("Bad request.")
    }

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

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
                html: `<div align="center"><a href="https://ibb.co/C2bKxpx"><img src="https://i.ibb.co/VmgYX0X/Welcome.png" align="center" alt="Welcome" border="0"></a></div>`,

            };

            const result = await transporter.sendMail(mailOptions);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }

    sendMail()
        .then(result => res.status(200).send("Enviado"))
        .catch(error => console.log(error));

})

Cliente.patch("/:id", async (req, res) => {
    const { id } = req.params
    const { name, lastname, password, dni, phone_number, status } = req.body

    try {
        const saltRounds = 10 // nivel de hasheo
        const passwordHash = await bcrypt.hash(password, saltRounds)//tomamos el password que nos envian en el formulario del frontend y le aplicamos un algoritmo de hasheo

        await Client.update({
            name,
            lastname,
            passwordHash,
            dni,
            phone_number,
            status
        }, { where: { id: id } })

        const ClientUpdated = await Client.findByPk(id)

        res.status(200).json(ClientUpdated);
    } catch (error) {
        console.log("error", error)
        res.status(500).json({ msg: 'Error', error })
    }
})



module.exports = Cliente;