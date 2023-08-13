const express = require('express')
const controller = require('../controllers/event')
const passport = require("passport");

const router = express.Router()
const auth = passport.authenticate('jwt', {session: false}, null)

// localhost:5000/api/event
router.get('/', auth, controller.get)

// localhost:5000/api/event/create
router.post('/create', auth, controller.createEvent)

// localhost:5000/api/event/getSectionByUserCategories/:id
router.get('/getSectionByUserCategories/:id', auth, controller.createUserEventSection)

// localhost:5000/api/event/getEventsWithCategories
router.get('/getEventsWithCategories', auth, controller.getEventsWithCategories)

// localhost:5000/api/event/get/:id
router.get('/get/:id', auth, controller.getById)

// localhost:5000/api/event/change/:id
router.put('/change/:id', auth, controller.change)

module.exports = router