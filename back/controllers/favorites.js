const db = require('../db')

module.exports.addToFavorites = async (req, res) => {
    const userId = req.params.id
    const result = []

    req.body.event_id.map(value => {
        result.push({
            user_id: +userId,
            event_id: +value
        })
    })

    await db('favorites').insert(result)
        .then(() => {
            return res.status(200).json({
                message: 'event added to favorites'
            })
        })
        .catch(e => {
                return res.status(500).json(e.message)
            }
        )
}

module.exports.getFavorites = async (req, res) => {
    const userId = req.params.id

    await db('favorites')
        .where({'favorites.user_id': +userId})
        .innerJoin('events', 'favorites.event_id', 'events.event_id')
        .then(result => {
            console.log(result);
            if (result.length === 0)
                return res.status(200).json({
                    message: 'favorites is empty'
                })
            return res.status(200).json(result)
        })
        .catch(e => {
                return res.status(500).json(e.message)
            }
        )
}

module.exports.delete = async (req, res) => {
    await db('favorites').where({'favorite_id': req.params.favorite_id}).delete()
        .then(() => {
            return res.status(200).json(
                {message: 'successfully deleted'}
            )
        })
        .catch(e => {
                return res.status(500).json(e.message)
            }
        )
}