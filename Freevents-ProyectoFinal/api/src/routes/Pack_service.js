// const PackServices = require('express').Router()
const PackServices = require('express').Router()

const { getAllPackServices} = require('../controllers/getAllPackServices');
const {getService_PackByName} = require('../controllers/getPack_ServiceByName')
// const { getPack_ServiceByName} = require('../controllers/getPack_ServiceByName'); 
const {getPack_serviceByID} = require('../controllers/getPack_ServiceByID.js')
const { Pack_services, Event, Service, Provider } = require('../db'); 

PackServices.get('/', async(req, res) => {
    try {
        const { name } = req.query; 
        const packs = await getAllPackServices(); 
        const packsByName = await getService_PackByName(name); 

        name
        ? res.status(200).json(packsByName) 
        : res.status(200).json(packs)
    }
    catch (error) {
        console.log(error); 
        res.status(500).send('Internal Server Error'); 
    }
})

PackServices.get('/:id', async(req, res) => {
    try {
        const { id } = req.params; 
        const packsId = await getPack_serviceByID(id);
        console.log('prueba de pack', packsId)

        res.status(200).json(packsId); 
    }
    catch (error) {
        console.log(error); 
        res.status(500).send('Internal Server Error'); 
    }
})

PackServices.post('/', async(req, res) => {
    const { name, description, price, status, galery_image, events, services, providerId } = req.body; 
    console.log("🚀 ~ file: Pack_service.js ~ line 42 ~ PackServices.post ~ req.body", req.body)
    try {
        const packCreate = await Pack_services.create({
            name, 
            description, 
            price, 
            status, 
            galery_image,
            providerId
          
        })
        for (let e of events){
            let eventsDb = await Event.findOne({
                where : {name: e}
            }) 
            packCreate.addEvent(eventsDb); 
        };
        for (let s of services){
            let serviceDb = await Service.findOne({
                where : {name: s}
            }) 
            packCreate.addService(serviceDb); 
        };
        let providerDb = await Provider.findOne({
            where : { id : providerId}
        }); 
        await packCreate.setProvider(providerDb);

        res.status(201).send('Pack created successfully!')
    }
    catch(error) {
        console.log(error); 
        res.status(400).send('Bad request.')
    }
})

PackServices.patch("/:id", async (req, res) => {
    const { id } = req.params
    // const { status, phone_number } = req.body

    try {
        const PackUpdated = await getPack_serviceByID(id)
        // const saltRounds = 10 // nivel de hasheo
        // const passwordHash_provider = await bcrypt.hash(password, saltRounds)//tomamos el password que nos envian en el formulario del frontend y le aplicamos un algoritmo de hasheo
        
            await PackUpdated.update(req.body)
            res.status(200).json(PackUpdated);

    } catch (error) {
        console.log("error post pack", error)
        res.status(500).json({ msg: 'Error', error })
    }
})






module.exports = PackServices;