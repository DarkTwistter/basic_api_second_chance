const express = require('express')
const controller = require('../controllers/favorites')
const passport = require("passport");

const router = express.Router()
const auth = passport.authenticate('jwt', {session: false}, null)

// localhost:5000/api/favorites/add/:id
router.post('/add/:id', auth, controller.addToFavorites)

// localhost:5000/api/favorites/get/:id
router.get('/get/:id', auth, controller.getFavorites)

// localhost:5000/api/favorites/delete?user_id=userId&favorites_id=favoritesId
router.delete('/delete/:user_id/:favorite_id', auth, controller.delete)

module.exports = router