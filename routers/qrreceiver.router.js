const express = require('express')
const Router = express.Router()
const {
    qrDecode
} = require('../controllers/qrreceiver.controller')

Router.route('/').post(
    qrDecode
)

module.exports = Router