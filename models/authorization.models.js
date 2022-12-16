const mongoose = require('mongoose')
const authorize = mongoose.Schema({
    device:String,
    auth:String
})

module.exports = mongoose.model('authorize',authorize)