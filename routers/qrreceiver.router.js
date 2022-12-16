const express = require('express')
const Router = express.Router()
const auth = require('../middlewares/authorize.middleware')
const qrDecode = require('../controllers/qrreceiver.controller')

Router.route('/').post(
    auth,
    qrDecode
)

module.exports = Router