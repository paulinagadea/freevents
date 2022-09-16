const { Event } = require('../db')

const getAllEvents = async () => {
    try {
        const event = await Event.findAll({

        });
        return event;
    } catch (error) {
        res.send(error);
    };
};

module.exports = { getAllEvents }