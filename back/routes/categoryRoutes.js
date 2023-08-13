const express = require('express')
const controller = require('../controllers/category')
const passport = require("passport");

const router = express.Router()
const auth = passport.authenticate('jwt', {session: false}, null)

// localhost:5000/api/category
router.get('/', auth, controller.get)

// localhost:5000/api/category/create
router.post('/create', auth, controller.create)

// localhost:5000/api/category/createUserList/:id
router.post('/createUserList/:id', auth, controller.createUserCategoryList)

// localhost:5000/api/category/getUserList/:id
router.get('/getUserList/:id', auth, controller.getUserCategoryList)

// localhost:5000/api/category/changeUserList/:id
router.put('/changeUserList/:id', auth, controller.changeUserCategoryList)

module.exports = router