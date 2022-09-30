const { Review } = require('../db')


const getAllReviews = async () => {
        const reviews = await Review.findAll({
            include:[
            {
                model: Provider, 
                attributes: [ "id", "name" ],
            },
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