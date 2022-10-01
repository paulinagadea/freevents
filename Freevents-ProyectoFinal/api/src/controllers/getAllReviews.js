const { Review, Provider, Client, Event } = require('../db')


const getAllReviews = async () => {
        const reviews = await Review.findAll({
<<<<<<< HEAD
            include:[
            {
                model: Provider, 
                attributes: [ "id", "name" ],
            },
=======
            include: [
                {
                    model: Provider,
                    attributes: [ "id", "name" ],
                },
                {
                    model: Client,
                    attributes: [ "id", "name" ]
                },
                {
                model: Event, 
                attributes: [ "name" ]
                }
>>>>>>> 972971a618e4fb4fb2a81962939775c79c654aaa
            ]
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