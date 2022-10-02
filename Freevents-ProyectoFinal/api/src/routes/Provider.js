const Prov = require('express').Router();
const bcrypt = require('bcrypt')
const { getAllProviders } = require('../controllers/getAllProviders')
const { getAllProviderByName } = require('../controllers/getProviderByName')
const { getProviderById } = require('../controllers/getProviderById')
const { Provider } = require('../db')
const { Event } = require("../db")

Prov.get('/', async (req, res) => {
    try {
        const { name } = req.query
        const provedores = await getAllProviders()
        const provedorByName = await getAllProviderByName(name)

        console.log('esto es provedorByName', provedorByName)
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
    const { name, sub, address, location, postal_code, cuit, email, password, phone_number, logotype, background_image, galery_image } = req.body;
    try {
        const saltRounds = 10 // nivel de hasheo
        const passwordHash = await bcrypt.hash(password, saltRounds)//tomamos el password que nos envian en el formulario del frontend y le aplicamos un algoritmo de hasheo

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
});


Prov.patch("/:id", async (req, res) => {
    const { id } = req.params
    const { name, address, location, postal_code, cuit, password, phone_number, logotype, background_image, galery_image, status } = req.body

    try {
        const saltRounds = 10 // nivel de hasheo
        const passwordHash = await bcrypt.hash(password, saltRounds)//tomamos el password que nos envian en el formulario del frontend y le aplicamos un algoritmo de hasheo

        await Provider.update({
            name,
            address,
            location,
            postal_code,
            cuit,
            passwordHash,
            phone_number,
            logotype,
            background_image,
            galery_image,
            status
        }, { where: { id: id } })

        const ProviderUpdated = await Provider.findByPk(id)

        res.status(200).json(ProviderUpdated);
    } catch (error) {
        console.log("error post provider", error)
        res.status(500).json({ msg: 'Error', error })
    }



})



module.exports = Prov;