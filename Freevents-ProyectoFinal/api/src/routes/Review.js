const { Router } = require('express');
const { getAllReviews, getReviewById } = require('../controllers/getAllReviews.js');
const { Review, Client, Provider, Event } = require('../db'); 

const router = Router();

router.get('/provider', async (req, res) => {
    try {
        const allReviews = await getAllReviews()
        res.status(200).json(allReviews);
    } catch (error) {
        res.status(404).send("Reviews not found");
    };
});


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const reviewById = await getReviewById(id)

        console.log('reviewId', reviewById)

        res.status(200).json(reviewById)

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})


router.post('/', async (req, res) => { 
    
    const {clientId, providerId, rating, comments, events} = req.body;
    console.log('body', events)
    try {
        // let clientDb = await Client.findOne({
        //     where : { id : clientId }
        // });
        // console.log('clientes', )
        // let providerDb = await Provider.findOne({
        //     where : { id : providerId }
        // });
        // console.log('proveedores', providerDb)
        
        const reviewCreated = await Review.create({
            // name: clientDb.name,
            // image, 
            rating,
            comments,
        })
        let eventsWea = await Event.findOne({
                where : { name: events }
        })
        console.log("anteojos", eventsWea)
        await reviewCreated.setEvent(eventsWea.id)
        // await reviewCreated.setProvider(providerDb.id); 
        // await reviewCreated.setClient(clientDb.id);

        let eventsDb = await Event.findOne({
            where: { id : eventsId }
        })
        console.log("Donatta", eventsDb)
        await reviewCreated.setEvent(eventsDb)


        let eventsDb = await Event.findOne({
            where: { id : eventsId }
        })
        console.log("Donatta", eventsDb)
        await reviewCreated.setEvent(eventsDb)


        res.status(200).json(reviewCreated);
    }catch(error) {
        console.log(error)
       res.status(500).json({ message: 'Error', error })
    }
 
})

router.put("/:id", async (req, res) => {

    try{
        
       await Review.update(req.body, {
                   where: { id: req.params.id }
               });
               res.status(200).json({ succes: 'Update Review' })
   
   } catch(error) {
    
    res.status(500).json({ message: 'Error', error })

   }
   
})

module.exports = router;