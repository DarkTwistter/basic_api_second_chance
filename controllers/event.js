const db = require('../db')
const Event = require('../model/Event')
const event = require('../utils/eventUtils')

module.exports.get = async (req, res) => {
    const events = await event.get()

    return res.status(200).json(events)
}

module.exports.createEvent = async (req, res) => {
    const eventModel = new Event(req.body).getModel()

    await event.create(eventModel)
        .then((result) => {
            console.log(result);
            return res.status(200).json({
                message: 'successful added'
            })
        })
        .catch(e => {
                return res.status(500).json(e.message)
            }
        )
}

module.exports.createUserEventSection = async (req, res) => {
    const userId = req.params.id

    await db('user_category')
        .where({'user_category.user_id': +userId})
        .innerJoin('event_category', 'user_category.category_id', 'event_category.category_id')
        .innerJoin('events', 'event_category.event_id', 'events.event_id')
        .then(result => {
            return res.status(200).json(result)
        })
        .catch(e => {
                return res.status(500).json(e.message)
            }
        )
}

module.exports.getEventsWithCategories = async (req, res) => {
    const result = await event.getWithCategoriesNames()

    return res.status(200).json(result)
}

module.exports.getById = async (req, res) => {
    const result = await event.getWithCategoriesNames({'events.event_id': req.params.id})

    if (result == null)
        return res.status(404).json({
            error: 'event not found'
        })

    return res.status(200).json(result)
}

module.exports.change = async (req, res) => {
    const modal = new Event(req.body)
    await event.change({'events.event_id': req.params.id}, modal)
        .then((result) => {
            return res.status(200).json({
                message: 'successfully changed'
            })
        })
        .catch(e => {
                return res.status(500).json(e.message)
            }
        )
}