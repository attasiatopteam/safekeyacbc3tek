const authorization = require('../models/authorization.models')
module.exports = async(req,res,next)=>{
    let checkAutho = await authorization.findOne({auth:req.headers.authorization})
    if(!checkAutho){
        res.json({
            code:401,
            mess:"Unauthorization"
        })
    }else{
        req.device = checkAutho.device
        next()
    }
}