const { Router } = require('express');
const { getAllServices, getServiceByName } = require('../controllers/getAllServices.js');
const {getServiceById} = require('../controllers/getServiceById.js');

const router = Router();
const { Service } = require('../db')

router.get('/', async (req, res) => {
    const { name } = req.query;
    // Si no recibo un nombre por query muestro todos los servicios.
    try {
        if (!name) {
            const services = await getAllServices();
            res.status(200).send(services);
        } else {
            const service = await getServiceByName(name);
            if (service.length) {
                res.status(200).send(service);
            } else {
                res.status(404).send("Service not found");
            };
        };
    } catch(error) {
        res.send(error);
    };
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const serviceById = await getServiceById(id)

        console.log('serviceId', serviceById)

        res.status(200).json(serviceById)

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})

router.post('/', async (req, res) => { 
    
    const {name, description, image } = req.body;

    try {
        const serviceCreated = await Service.create({
            name,
            description,
            image
        })
        res.status(200).json(serviceCreated);
    }catch(error) {

       res.status(500).json({ message: 'Error', error })
    }
 
})


module.exports = router;