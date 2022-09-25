const { Router } = require('express');
const {getAllFavorites, getFavoriteByProvider, getFavoriteById} = require('../controllers/getAllFavorites.js');
const { Favorite, Client, Provider } = require('../db'); 
const router = Router(); 



router.get('/', async (req, res) => {
    
    const { user_provider } = req.query;
    // Si no recibo un provider por query muestro todos los servicios.
    try {
        if (!user_provider) {
            const favorites = await getAllFavorites();
            res.status(200).send(favorites);
        } else {
            const favorite = await getFavoriteByProvider(user_provider);
            if (favorite.length) {
                res.status(200).send(favorite);
            } else {
                res.status(404).send("Favorite not found");
            };
        };
    } catch(error) {
        res.send(error);
    };
});


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const favoriteById = await getFavoriteById(id)

        console.log('favoriteId', favoriteById)

        res.status(200).json(favoriteById)

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})

router.post('/', async (req, res) => { 
    
    const {clientId, providerId, user_provider, event} = req.body;

    try {
        const favoriteCreated = await Favorite.create({
            user_provider,
            event,
        })
        let clientDb = await Client.findOne({
            where : { id : clientId }
        });

        await favoriteCreated.setClient(clientDb.id);

        let providerDb = await Provider.findOne({
            where : { id : providerId }
        });
        await favoriteCreated.setProvider(providerDb.id); 

        res.status(200).json(favoriteCreated);
    }catch(error) {

       res.status(500).json({ message: 'Error', error })
    }
 
})

router.put("/:id", async (req, res) => {

    try{
        
       await Favorite.update(req.body, {
                   where: { id: req.params.id }
               });
               res.status(200).json({ succes: 'Update Favorite' })
   
   } catch(error) {

       res.status(500).json({ message: 'Error', error })

   }
   
})

router.delete("/:id", async (req, res) => {

    try {
        await Favorite.destroy({
                    where: { id: req.params.id }
                });
                res.status(200).json({ success: 'Delete Favorite' })

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})


module.exports = router;