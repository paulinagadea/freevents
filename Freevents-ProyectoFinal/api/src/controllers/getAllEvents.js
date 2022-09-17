const { Event } = require('../db')

const getAllEvents = async () => {
    try {
        const eventos = await Event.findAll({
                
        });
        return res.json(eventos);
    } catch (error) {
        res.send(error);
    };
};

module.exports = { getAllEvents }