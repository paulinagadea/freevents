const clientLogin = require('express').Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { Client } = require('../db')

clientLogin.post('/', async (req, res) => {
    const { email, password } = req.body
    try {


        const cliente = await Client.findOne({ where: { email: email } })
        console.log('esto es proveedor:', proveedor)
        const passwordCorrect = await bcrypt.compare(password, cliente.passwordHash)

        console.log('esto es passwordCorrect:', passwordCorrect)

        if (!(cliente && passwordCorrect)) {
            return res.status(401).json({
                error: 'invalid proveedor or password'
            })
        } else {


            const userForToken = {
                id: cliente.id, //guardamos el id del usuario en el token
                email: cliente.email // y el email
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
                name: cliente.name,
                email: cliente.email,
                token
            })
        }
    } catch (error) {
        console.log("esto es provider_login:", error)
        res.status(500).json({ msg: 'Error', error })
    }
})

module.exports = clientLogin;