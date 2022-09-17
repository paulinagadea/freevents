const { Router } = require('express');
const { getAllServices } = require('../controllers/getAllServices.js');
const {getServiceById} = require('../controllers/getServiceById.js');

const router = Router();
const { Service } = require('../db')

router.get('/', async (req, res) => {
    try {
        const allServices = await getAllServices()
        res.status(200).json(allServices);
    } catch (error) {
        res.status(404).send("Services not found");
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
    
    const {name, description, type_service, image } = req.body;

    try {
        const serviceCreated = await Service.create({
            name,
            description,
            type_service,
            image
        })
        res.status(200).json(serviceCreated);
    }catch(error) {

       res.status(500).json({ message: 'Error', error })
    }
 
})


module.exports = router;