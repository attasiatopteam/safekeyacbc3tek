const mongoose = require('mongoose')
const transcode = mongoose.Schema({
    device:String,
    transid:String,
    code:String
})

module.exports = mongoose.model('transcode',transcode)