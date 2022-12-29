let transcode = require('../models/transcode.model')
module.exports = async(req,res,next)=>{
  let {...body}=req.body
  let checkCode = await transcode.findOneAndUpdate({device:body.device},{device:body.device,transid:body.transid.slice(-6)},{new: true})
  if(checkCode){
    res.json(checkCode)
  }else{
    let sendTrans = await transcode.create(body)
    res.json(sendTrans)
  }
}