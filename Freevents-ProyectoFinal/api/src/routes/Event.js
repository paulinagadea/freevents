const { Router } = require('express');
const { getAllEvents } = require('../controllers/getAllEvents.js')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const allEvents = await getAllEvents()
        res.status(200).json(allEvents);
    } catch (error) {
        res.status(404).send("Services not found");
    };
});

module.exports = router;