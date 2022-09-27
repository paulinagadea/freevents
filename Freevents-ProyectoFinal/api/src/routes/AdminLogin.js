const adminLogin = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Admin } = require('../models/Admin');

adminLogin.post('/', async (req, res) => {
    const { email, password } = req.body
    try {


        const administra = await Admin.findOne({ where: { email: email } })
        console.log('esto es administrador:', administrador)
        const passwordCorrect = await bcrypt.compare(password, administra.passwordHash)

        console.log('esto es passwordCorrect:', passwordCorrect)

        if (!(administra && passwordCorrect)) {
            return res.status(401).json({
                error: 'invalid administrador or password'
            })
        } else {


            const userForToken = {
                id: administra.id, //guardamos el id del usuario en el token
                email: administra.email // y el email
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
                name: administra.name,
                email: administra.email,
                token
            })
        }
    } catch (error) {
        console.log("esto es admin_login:", error)
        res.status(500).json({ msg: 'Error', error })
    }
})

module.exports = adminLogin;