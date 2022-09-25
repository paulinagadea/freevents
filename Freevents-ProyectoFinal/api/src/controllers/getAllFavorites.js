const { Favorite } = require('../db')


const getAllFavorites = async () => {
    const favorite = await Favorite.findAll();
    return favorite;
};

const getFavoriteByProvider = async (user_provider) => {
    const allFavorites = await getAllFavorites();
    if (user_provider) {
        const favoriteEvent = allFavorites.filter(e => e.user_provider.toLowerCase().includes(user_provider.toLowerCase()));
        return favoriteEvent;
    };
};


const getFavoriteById = async (id) => {

    const favoriteId = await Favorite.findOne({
        where: { id: id }
    })
    console.log('✍', favoriteId)
    return favoriteId ? favoriteId : "not found"
}


module.exports = { getAllFavorites, getFavoriteByProvider, getFavoriteById }