const { Router } = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const router = Router();
const { Client } = require('../db')
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

router.post('/', async (req, res) => {


    const { name, lastname,  passwordHash_client, dni, email, phone_number } = req.body;
    
   
      const clientCreated = await Client.create({
            name,
            lastname,
            passwordHash_client,
            dni,
            email,
            phone_number
        })

      JSON.stringify(clientCreated)

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

module.exports = router;