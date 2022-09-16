const { Router } = require('express');
const { getAllProviders } = require('../controllers/getAllProviders')
// const { getProviderByName } = require('../controllers/getProviderByName')

const router = Router();

router.get('/', async (req, res) => {
    try {
        // const { name } = req.query
        const allProviders = await getAllProviders()
        // const providersByName = await getProviderByName(name)

        name &&
            // res.status(200).json(providersByName)
            res.status(200).json(allProviders)

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})

module.exports = router;