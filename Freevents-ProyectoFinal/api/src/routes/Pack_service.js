const { Router } = require('express');
const { getAllPackServices, getPacksByName, getPacksById } = require('../controllers/getAllPackServices'); 
const { Pack_services, Event, Service } = require('../db'); 
const router = Router(); 

router.get('/', async(req, res) => {
    try {
        const { name } = req.query; 
        const packs = await getAllPackServices(); 
        const packsByName = await getPacksByName(); 

        name
        ? res.status(200).json(packsByName) 
        : res.status(200).json(packs)
    }
    catch (error) {
        console.log(error); 
        res.status(500).send('Internal Server Error'); 
    }
})

router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params; 
        const packsId = await getPacksById(id);
        console.log('prueba de pack', packsId)

        res.status(200).json(packsId); 
    }
    catch (error) {
        console.log(error); 
        res.status(500).send('Internal Server Error'); 
    }
})

router.post('/', async(req, res) => {
    const { name, description, price, status_enable, galery_image, events, services } = req.body; 
    try {
        const packCreate = await Pack_services.create({
            name, 
            description, 
            price, 
            status_enable, 
            galery_image
        })
        for (let e of events){
            let eventsDb = await Event.findOne({
                where : {name: e}
            }) 
            packCreate.addEvent(eventsDb); 
        }
        for (let s of services){
            let serviceDb = await Service.findOne({
                where : {name: s}
            }) 
            packCreate.addService(serviceDb); 
        }
        res.status(201).send('Pack created successfully!')
    }
    catch(error) {
        console.log(error); 
        res.status(400).send('Bad request.')
    }
})

router.put("/:id", async (req, res) => {

    try{
        
       await Pack_services.update(req.body, {
                   where: { id: req.params.id }
               });
               res.status(200).json({ succes: 'Update Pack' })
   
   } catch(error) {

       res.status(500).json({ message: 'Error', error })

   }
   
})

router.delete("/:id", async (req, res) => {

    try {
        await Pack_services.destroy({
                    where: { id: req.params.id }
                });
                res.status(200).json({ success: 'Delete Pack' })

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})


module.exports = router;