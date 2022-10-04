const Prov = require('express').Router();
const bcrypt = require('bcrypt')
const { getAllProviders } = require('../controllers/getAllProviders')
const { getAllProviderByName } = require('../controllers/getProviderByName')
const { getProviderById } = require('../controllers/getProviderById')
const { Provider } = require('../db')
const { Event } = require("../db")
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

Prov.get('/', async (req, res) => {
    try {
        const { name } = req.query
        const provedores = await getAllProviders()
        const provedorByName = await getAllProviderByName(name)

            name ?
                res.status(200).json(provedorByName)
                : res.status(200).json(provedores)
       
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error', error })
    }
});

//
Prov.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const provedorById = await getProviderById(id)

        console.log('esto es provedorById', provedorById)

        res.status(200).json(provedorById)

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error', error })
    }
})


Prov.post("/", async (req, res) => {
    const { name, sub, address, location, postal_code, cuit, email, passwordHash, phone_number, logotype, background_image, galery_image } = req.body;
    try {
        // const saltRounds = 10 // nivel de hasheo
        // const passwordHash = await bcrypt.hash(password, saltRounds)//tomamos el password que nos envian en el formulario del frontend y le aplicamos un algoritmo de hasheo

        const newProvider = await Provider.create({
            name,
            sub,
            address,
            location,
            postal_code,
            cuit,
            email,
            passwordHash,
            phone_number,
            logotype,
            background_image,
            galery_image,
        })

        const savedUser = await newProvider.save()

        res.status(200).json(savedUser);

        //anexamos la lista de eventos al proveedor
        // let eventsDb = await Event.findAll({
        //     where: { name: events }
        // })
        // savedUser.addEvent(eventsDb);

    } catch (error) {
        console.log("error post provider", error)
        res.status(500).json({ msg: 'Error', error })
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
                    user: "freeevents4@gmail.com",
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken,


                },
            })

            const mailOptions = {
                from: "Freevents <freeevents4@gmail.com>",
                to: email,
                subject: "Freevents",
                html: `<a href="https://freevents.vercel.app/"><div align="center"><img src="https://i.ibb.co/VmgYX0X/Welcome.png" align="center" alt="Welcome" border="0"></div></a>`,

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

});



Prov.patch("/:id", async (req, res) => {
    const { id } = req.params
    // const { status, phone_number } = req.body

    try {
        const ProviderUpdated = await getProviderById(id)
        // const saltRounds = 10 // nivel de hasheo
        // const passwordHash_provider = await bcrypt.hash(password, saltRounds)//tomamos el password que nos envian en el formulario del frontend y le aplicamos un algoritmo de hasheo
        if (ProviderUpdated !== "not found") {
            await ProviderUpdated.update(req.body)
            res.status(200).json(ProviderUpdated);
        } else {
            res.status(400).json("Provider not found");
        }


    } catch (error) {
        console.log("error post provider", error)
        res.status(500).json({ msg: 'Error', error })
    }
})



module.exports = Prov;