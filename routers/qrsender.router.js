const express = require('express')
const Router = express.Router()
const sender = require('../controllers/qrcodesender.controller')

Router.route('/').post(
    sender
)

module.exports = Router