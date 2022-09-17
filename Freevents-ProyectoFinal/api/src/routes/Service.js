const { Router } = require('express');
const { getAllServices, getServiceByName } = require('../controllers/getAllServices.js')

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        // Si no recibo un nombre por query muestro todos los servicios.
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
    } catch (error) {
        res.send(error);
    };
});

module.exports = router;