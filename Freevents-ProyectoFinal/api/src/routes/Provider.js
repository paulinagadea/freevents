const { Router } = require('express');
const { getAllProviders } = require('../controllers/getAllProviders')
const router = Router();
// const { Provider } = require('../db')


router.get('/', async (req, res) => {
    try {

        // const provedores = await Provider.findAll()
        const provedores = await getAllProviders()

        res.status(200).send(provedores)


    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})

// router.post("/", async (req, res) => {
//     const { name, adress, location, postal_code, cuit, email, phone_number } = req.body;
//     try {
//         const actCreated = await Activity.create({
//             name,
//             adress,
//             location,
//             postal_code,
//             cuit,
//             email,
//             phone_number
//         })
//         // for (let i = 0; i < countries.length; i++) {
//         //     const countryActivity = await Country.findOne({
//         //         where: { name: countries[i] }
//         //     })
//         //     actCreated.addCountry(countryActivity);
//         // }


//         res.status(200).json(actCreated);
//     } catch (error) {
//         res.status(500).json({ msg: 'Error', error })
//     }
// });


module.exports = router;