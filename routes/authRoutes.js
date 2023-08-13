const express = require('express')
const controller = require('../controllers/auth')
const passport = require("passport");

const router = express.Router()
const auth = passport.authenticate('jwt', {session: false}, null)

// localhost:5000/api/auth/login
router.post('/login', controller.login)

// localhost:5000/api/auth/register
router.post('/register', controller.register)

// localhost:5000/api/auth/createUser
router.post('/createUser', controller.createUser)

// localhost:5000/api/auth/delete/:id
router.delete('/delete/:id', controller.deleteUser)

module.exports = router