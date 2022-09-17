const { Router } = require('express');
const { getServiceId } = require('../controllers/getServiceId.js')

const router = Router();


router.get('/:id', async (req, res) => {
    const {id} = req.params;

    try {
        if(id) {
            const servicesId = await getServiceId(id);
            res.status(200).json(servicesId);
        }

    } catch (err) {
         res.status(404).send("Not found Id");
    }
})

module.exports = router;