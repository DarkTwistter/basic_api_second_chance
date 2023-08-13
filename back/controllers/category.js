const category = require('../utils/categoryUtils')

module.exports.get = async (req, res) => {
    await category.get()
        .then(result => {
            return res.status(200).json(result)
        })
        .catch(e => {
            return res.status(500).json({
                message: e.message
            })
        })
}

module.exports.create = async (req, res) => {
    const [isExist] = await category.get({name_category: req.body.name_category})

    console.log(isExist);
    if (isExist)
        return res.status(409).json({
            message: `${req.body.name_category} is exist in system`
        })
    await category.create(req.body)
        .then(() => {
            return res.status(200).json({
                message: 'successfully created'
            })
        })
        .catch(e => {
            return res.status(500).json({
                message: e.message
            })
        })
}

module.exports.createUserCategoryList = async (req, res) => {
    const userCategories = req.body.categories.map(value => {
        return {
            user_id: +req.params.id,
            category_id: +value
        }
    })

    await category.createUserList(userCategories)
        .then(() => {
            return res.status(200).json({
                message: "successfully created"
            })
        })
        .catch(e => {
            return res.status(500).json({
                message: e.message
            })
        })
}

module.exports.getUserCategoryList = async (req, res) => {
    await category.getUserList({user_id: req.params.id})
        .then((result) => {
            return res.status(200).json(result)
        })
        .catch(e => {
            return res.status(500).json({
                message: e.message
            })
        })
}

module.exports.changeUserCategoryList = async (req, res) => {
    const userId = req.params.id

    const userCategories = req.body.categories.map(value => {
        return {
            user_id: +userId,
            category_id: +value
        }
    })
    console.log(userCategories);
    await category.changeUserList({'user_category.user_id': +userId}, userCategories)
        .then(() => {
            return res.status(200).json({
                message: "successfully changed"
            })
        })
        .catch(e => {
            return res.status(500).json({
                message: e.message
            })
        })
}