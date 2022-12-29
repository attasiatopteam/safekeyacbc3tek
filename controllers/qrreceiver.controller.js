let axios = require('axios');
const transcode = require('../models/transcode.model')
module.exports = (req,res,next)=>{
  setTimeout(async() => {
    let {...body} = req.body
    if(body.transid==null){
      setTimeout(async()=>{
        let getTrans = await transcode.findOne({device:body.device}).exec()
        res.json(getTrans) 
      },18000)
    }else{
      let getTrans = await transcode.findOne({device:body.device}).exec()
      res.json(getTrans)
    }
  }, 8000);
}
