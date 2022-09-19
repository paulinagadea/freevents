const { Event } = require('../db')

const getEventById = async (id) => {

    const eventId = await Event.findOne({
        where: { id: id }
    })
    console.log('✍', eventId)
    return eventId ? eventId : "not found"
}

module.exports = { getEventById }