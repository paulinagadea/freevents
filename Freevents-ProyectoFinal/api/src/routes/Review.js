const { Router } = require('express');
const { getAllReviews, getReviewById } = require('../controllers/getAllReviews.js');
const { Review, Client, Provider } = require('../db'); 

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
    
    const {clientId, providerId, rating, comments} = req.body;

    try {
        const reviewCreated = await Review.create({
            rating,
            comments,
        })
        let clientDb = await Client.findOne({
            where : { id : clientId }
        });

        await reviewCreated.setClient(clientDb.id);

        let providerDb = await Provider.findOne({
            where : { id : providerId }
        });
        await reviewCreated.setProvider(providerDb.id); 

        res.status(200).json(reviewCreated);
    }catch(error) {

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