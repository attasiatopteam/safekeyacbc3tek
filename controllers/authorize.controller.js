const authorize = require('../models/authorization.models')

module.exports= {
    create: async(req,res,next)=>{
        let {...body}= req.body
        let filter = {
            device:body.device
        }
        let update = {
            device:body.device,
            auth:body.auth
        }
        let updateAuth = await authorize.findOneAndUpdate(filter,update,{new: true})
        if(updateAuth){
            res.json(updateAuth)
        }else{
            let createAuth = await authorize.create(body)
            res.json(createAuth)
        }
    },
    read: async(req,res,next)=>{
        if(req.headers.secret=="eysaceaz.2jeajzs"){
            let getAuth = await authorize.findOne({device:req.query.device})
            res.json(getAuth.auth)
        }else{
            res.json({
                code:404,
                mess:"Unauthorize"
            })
        }
    }
}