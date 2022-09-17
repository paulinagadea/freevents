const { Event } = require("../db")

const getAllEvents = async () => {
        const event = await Event.findAll();
        return event;

};

module.exports = { getAllEvents }