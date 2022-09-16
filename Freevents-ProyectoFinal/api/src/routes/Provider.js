const { Router } = require('express');
const { getAllProviders } = require('../controllers/getAllProviders')
const router = Router();
const { Provider } = require('../db')

router.get('/', async (req, res) => {
    try {
        const provedores = await getAllProviders()
        res.status(200).json(provedores)

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})

router.post("/", async (req, res) => {
    const { name, adress, location, postal_code, cuit, email, phone_number } = req.body;
    try {
        const actCreated = await Provider.create({
            name,
            adress,
            location,
            postal_code,
            cuit,
            email,
            phone_number
        })

        res.status(200).json(actCreated);
    } catch (error) {
        res.status(500).json({ msg: 'Error', error })
    }
});


module.exports = router;