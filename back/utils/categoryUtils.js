const db = require('../db')

module.exports.get = async (condition = {}) => {
    return db('categories').where(condition)
}

module.exports.create = async (category) => {
    return db('categories').insert(category)
}

module.exports.createUserList = async (category) => {
    return db('user_category').insert(category)
}

module.exports.changeUserList = async (condition, category) => {
    await db('user_category')
        .where(condition)
        .del()

    return await db('user_category').insert(category)
}

module.exports.getUserList = async (condition = {}) => {
    const joinedBase = await db('user_category')
        .innerJoin('categories', 'user_category.category_id', 'categories.category_id')
        .where(condition)

    const filteredValues = [...joinedBase]
    let result = []

    for (let i = 0; i <= filteredValues.length - 1; i++) {
        if (filteredValues[i].name_category === null)
            continue

        if (result.some(element => element.user_id !== filteredValues[i].user_id) || i === 0) {
            const object = {
                ...filteredValues[i],
                categories: Array({
                    category_id: filteredValues[i].category_id,
                    name_category: filteredValues[i].name_category,
                    rating_category: filteredValues[i].rating_category
                })
            }
            delete object.category_id
            delete object.name_category
            delete object.rating_category
            result.push(object)
        } else {
            result.map(element => {
                element.categories.push({
                    category_id: filteredValues[i].category_id,
                    name_category: filteredValues[i].name_category,
                    rating_category: filteredValues[i].rating_category
                })
            })
        }
    }

    return result[0]
}