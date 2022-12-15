const qrDecode = require('./qrreceiver.router')
const authorize = require('./authorize.router')
module.exports = (app)=>{
    app.use('/qrdecode',qrDecode)
    app.use('/authorize',authorize)
}