const Admi = require('express').Router();
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { getAllAdmins, getAdminByName, getAdminById } = require('../controllers/getAllAdmins.js');
const { Admin } = require('../db');
const { Client } = require('../db');
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

Admi.get('/', async (req, res) => {

    const { name } = req.query;
    // Si no recibo un nombre por query muestro todos los servicios.
    try {
        if (!name) {
            const clients = await getAllAdmins();
            res.status(200).send(clients);
        } else {
            const client = await getAdminByName(name);
            if (client.length) {
                res.status(200).send(client);
            } else {
                res.status(404).send("Admin not found");
            };
        };
    } catch (error) {
        res.send(error);
    };
});

Admi.get('/:id', async (req, res) => {

    try {
        const { id } = req.params
        const adminById = await getAdminById(id)

        console.log('adminId', adminById)

        res.status(200).json(adminById)

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})

Admi.post("/", async (req, res) => {
    const { name, email, passwordHash_admin, user_admin } = req.body;
    console.log('llega?', req.query)
    try {
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(passwordHash_admin, saltRounds)

        const adminCreated = await Admin.create({
            name,
            email,
            passwordHash,
            user_admin
        })

        const savedAdmin = await adminCreated.save();

        res.status(200).json(savedAdmin);
    }
    catch (error) {
        console.log(error)
        res.status(400).send("Bad request.")
    }
})

Admi.post("/promocion", async (req, res) => {

    const { name, lastname, passwordHash_client, dni, email, phone_number } = req.body;
console.log(name, lastname, passwordHash_client, dni, email, phone_number)


    const clientCreated = await Client.create({
        name,
        lastname,
        passwordHash:passwordHash_client,
        dni,
        email,
        phone_number
    })
console.log("@1@")

    JSON.stringify(clientCreated)

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    async function sendMail() {
        try {

            const accessToken = await oAuth2Client.getAccessToken()

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: "estefaniachavez1506@gmail.com",
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken,


                },
            })

            const mailOptions = {
                from: "Freevents <estefaniachavez1506@gmail.com>",
                to: email,
                subject: "Oferta Freevents",
                html: `<a href="https://freevents.vercel.app/"><div align="center"><img src="https://i.ibb.co/Xt5Skt7/oferta.png" alt="Oferta" border="0"></div></a>`,

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



Admi.put("/:id", async (req, res) => {

    try {

        await Admin.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json({ succes: 'Update Admin' })

    } catch (error) {

        res.status(500).json({ message: 'Error', error })

    }

})

Admi.delete("/:id", async (req, res) => {

    try {
        await Admin.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({ success: 'Delete Admin' })

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})


module.exports = Admi;