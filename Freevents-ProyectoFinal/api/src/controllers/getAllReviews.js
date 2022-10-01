const { Review, Provider, Client, Event } = require('../db')


const getAllReviews = async () => {
        const reviews = await Review.findAll({
            // include: [
            //     {
            //         model: Provider,
            //         attributes: [ "id", "name" ],
            //     },
            //     {
            //         model: Client,
            //         attributes: [ "id", "name" ]
            //     },
            //     {
            //     model: Event, 
            //     attributes: [ "name" ]
            //     }

            // ]
        });
        return reviews;

};


const getReviewById = async (id) => {

    const reviewId = await Review.findOne({
        where: { id: id }
    })
    console.log('✍', reviewId)
    return reviewId ? reviewId : "not found"
}



module.exports = { getAllReviews, getReviewById }