let axios = require('axios');
const transcode = require('../models/transcode.model')
module.exports = async(req,res,next)=>{
  let {...body} = req.body
    let getTrans = await transcode.findOne({transid:body.transid}).exec()
    res.json(getTrans)  
}
