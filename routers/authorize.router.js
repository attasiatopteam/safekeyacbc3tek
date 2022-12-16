const express = require('express')
const Router = express.Router()
const {
    create,
    read
} = require('../controllers/authorize.controller')
Router.route('/').get(
    read
)

Router.route('/').post(
    create
)

module.exports = Router