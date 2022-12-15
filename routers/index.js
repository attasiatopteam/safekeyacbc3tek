const qrDecode = require('./qrreceiver.router')
const qrsend = require('./qrsender.router')
const authorize = require('./authorize.router')
module.exports = (app)=>{
    app.use('/qrdecode',qrDecode)
    app.use('/qrsend',qrsend)
    app.use('/authorize',authorize)
}