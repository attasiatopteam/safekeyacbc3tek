let axios = require('axios');
let transcode = require('../models/transcode.model')
module.exports = async(req,res,next)=>{
  let {...body}=req.body
  let filter = {
    transid:body.device
  }
  let update = {
    device:body.device,
    transid:body.transid,
    code:body.code
  }
  let checkCode = await transcode.findOneAndUpdate(filter,update,{new: true})
  if(checkCode){
    res.json(checkCode)
  }else{
    let sendTrans = await transcode.create(body)
    res.json(sendTrans)
  }
}