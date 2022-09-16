const { Router } = require('express');
const { getAllServices } = require('../controllers/getAllServices.js')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const allServices = await getAllServices()
        res.status(200).json(allServices);
    } catch (error) {
        res.status(404).send("Services not found");
    };
});

module.exports = router;