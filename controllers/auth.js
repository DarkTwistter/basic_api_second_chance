const db = require('../db')
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports.login = async (req, res) => {
    const {email, password} = req.body

    const [user] = await db('users').where({email})
    if (user == null)
        return res.status(404).json({
            message: 'Пользователя с таким email не существует'
        })

    if (!bcrypt.compareSync(password, user.password))
        return res.status(401).json({
            message: 'Пароль неверный'
        })

    const token = jwt.sign({
        user_id: user.user_id,
        email: user.email,
        name: user.name,
        role: user.role
    }, process.env.TOKEN_SECRET, {})

    return res.status(200).json({
        token: `Bearer ${token}`
    })
}

module.exports.register = async (req, res) => {
    const userModal = new User(req.body).getModel()

    await db('users').insert(userModal)
        .then(() => {
            return res.status(200).json({
                message: 'user created'
            })
        })
        .catch(e => {
            return res.status(500).json(e.message)
        })
}

module.exports.createUser = async (req, res) => {
    const userModal = new User(req.body).getModel()

    await db('users').insert(userModal)
        .then(() => {
            return res.status(200).json({
                message: 'user created'
            })
        })
        .catch(e => {
            return res.status(500).json(e.message)
        })
}

module.exports.deleteUser = async (req, res) => {
    const userId = req.params.id

    await db('users').where({'user_id': userId}).delete()
        .then(() => {
            return res.status(200).json({
                    message: 'deleted'
                }
            )
        })
        .catch(e => {
            return res.status(500).json(e.message)
        })
}