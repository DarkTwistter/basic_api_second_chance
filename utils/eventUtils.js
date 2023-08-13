const db = require('../db')

module.exports.get = async (condition = {}) => {
    return db('events').where(condition);
}

module.exports.create = async (model) => {
    return db('events').insert(model)
}

module.exports.change = async (condition = {}, modal) => {
    return db('events').where(condition).update(modal);
}

module.exports.getWithCategoriesNames = async (condition = {}) => {
    const joinedBase = await db('events')
        .select('events.event_id', 'user_id', 'name', 'date', 'description', 'place',
            'duration', 'statistic', 'images', 'rating', 'price', 'status', 'name_category')
        .leftJoin('event_category', 'events.event_id', 'event_category.event_id')
        .leftJoin('categories', 'event_category.category_id', 'categories.category_id')
        .where(condition)

    const filteredValues = [...joinedBase]
    let result = []

    for (let i = 0; i <= filteredValues.length - 1; i++) {
        if (filteredValues[i].name_category === null)
            continue

        if (result.some(event => event.event_id !== filteredValues[i].event_id) || i === 0) {
            const object = {
                ...filteredValues[i],
                name_category: Array(filteredValues[i].name_category)
            }
            result.push(object)
        } else {
            result.map(event => {
                event.name_category.push(filteredValues[i].name_category)
            })
        }
    }

    return result
}

module.exports.getWithCategoriesId = async (condition) => {
    const joinedBase = await db('events')
        .select('*')
        .leftJoin('event_category', 'events.event_id', 'event_category.event_id')
        .leftJoin('categories', 'event_category.category_id', 'categories.category_id')
        .where(condition)

    return joinedBase
}