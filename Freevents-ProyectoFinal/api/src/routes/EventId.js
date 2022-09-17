const { Router } = require('express');
const { getEventId } = require('../controllers/getEventId.js')

const router = Router();


router.get('/:id', async (req, res) => {
    const {id} = req.params;

    try {
        if(id) {
            const eventsId = await getEventId(id);
            res.status(200).json(eventsId);
        }

    } catch (err) {
         res.status(404).send("Not found Id");
    }
})

module.exports = router;