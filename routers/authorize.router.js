const express = require('express')
const Router = express.Router()
const token = require('../middlewares/authorize.middleware')
const authorize = require('../controllers/authorize.controller')
Router.route('/').get(
    token,
    authorize
)

module.exports = Router