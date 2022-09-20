const { Router } = require('express');
const { getAllProviders } = require('../controllers/getAllProviders')
const { getAllProviderByName } = require('../controllers/getProviderByName')
const { getProviderById } = require('../controllers/getProviderById')
const router = Router();
const { Provider } = require('../db')
const { Event } = require("../db")

router.get('/', async (req, res) => {
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
router.get('/:id', async (req, res) => {
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


router.post("/", async (req, res) => {
    const { name, address, location, postal_code, cuit, email, phone_number, logotype, background_image, galery_image, events } = req.body;
    console.log('estamos aqui', req.body)
    const aux1 = [galery_image]
    const aux2 = [events]
    try {
        const actCreated = await Provider.create({
            name,
            address,
            location,
            postal_code,
            cuit,
            email,
            phone_number,
            logotype,
            background_image,
            aux1,
        })
        console.log('acá');
        for (let e of aux2){
            let eventsDb = await Event.findOne({
                where : {name: e}
            }) 
            actCreated.addEvent(eventsDb); 
        }

        res.status(200).json(actCreated);
    } catch (error) {
        console.log("perritos errores", error)
        res.status(500).json({ msg: 'Error', error })
    }
});


module.exports = router;