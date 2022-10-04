const providerLogin = require('express').Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { Provider } = require('../db')
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

providerLogin.post('/', async (req, res) => {
    const { email, password } = req.body
    try {


        const proveedor = await Provider.findOne({ where: { email: email } })
        console.log('esto es proveedor:', proveedor)
        const passwordCorrect = await bcrypt.compare(password, proveedor.passwordHash)

        console.log('esto es passwordCorrect:', passwordCorrect)

        if (!(proveedor && passwordCorrect)) {
            return res.status(401).json({
                error: 'invalid proveedor or password'
            })
        } else {


            const userForToken = {
                id: proveedor.id, //guardamos el id del usuario en el token
                email: proveedor.email // y el email
            }

            console.log('esto es userForToken', userForToken)

            const token = jwt.sign( //firmamos o creamos el token 
                userForToken,
                "love", // palabra secreta
                {
                    expiresIn: 60 * 60 * 24 * 7
                }
            )
            console.log('esto es token', token)


            return res.send({
                name: proveedor.name,
                email: proveedor.email,
                token
            })
        }
    } catch (error) {
        console.log("esto es provider_login:", error)
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

})


module.exports = providerLogin;