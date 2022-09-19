const { Router } = require('express');
const { getAllEvents } = require('../controllers/getAllEvents.js');
const { getEventById } = require('../controllers/getEventById');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const allEvents = await getAllEvents()
        res.status(200).json(allEvents);
    } catch (error) {
        res.status(404).send("Events not found");
    };
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const eventId = await getEventById(id)

        console.log('eventId', eventId)

        res.status(200).json(eventId)

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})



module.exports = router;