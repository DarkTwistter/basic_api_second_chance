const express = require('express')

require('express-async-errors') // stub for catching async errors in controllers

const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const passport = require('passport')
const authorization = require('./middleware/passport')

const eventRoutes = require('./routes/eventRountes')
const authRoutes = require('./routes/authRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const favoritesRoutes = require('./routes/favoritesRoutes.js')

const app = express()

app.use(passport.initialize())
passport.use(authorization.strategy)

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/event', eventRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/favorites', favoritesRoutes)

module.exports = app