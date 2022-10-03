const { Router } = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const router = Router();
const { Client } = require('../db')
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

router.post('/', async (req, res) => {


    const { name, lastname,  passwordHash, dni, email, phone_number } = req.body;
    
   
      const clientCreated = await Client.create({
            name,
            lastname,
            passwordHash,
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
                html: `<div align="center"><a href="https://ibb.co/C2bKxpx"><img src="https://i.ibb.co/VmgYX0X/Welcome.png" align="center" alt="Welcome" border="0"></a></div>`,
                
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