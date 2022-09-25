const providerLogin = require('express').Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { Provider } = require('../db')

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
})

module.exports = providerLogin;