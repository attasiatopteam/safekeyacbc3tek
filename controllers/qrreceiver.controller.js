let axios = require('axios');
const transcode = require('../models/transcode.model')
module.exports = (req,res,next)=>{
  setTimeout(async() => {
    let {...body} = req.body
    let getTrans = await transcode.findOne({device:body.device}).exec()
    if(body.transid==null){
      setTimeout(()=>{
        res.json(getTrans)  
      },10000)
    }else{
      res.json(getTrans)
    }
  }, 8000);
}
