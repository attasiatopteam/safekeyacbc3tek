let axios = require('axios');
const transcode = require('../models/transcode.model')
module.exports = (req,res,next)=>{
  setTimeout(async() => {
    let {...body} = req.body
    let getTrans = await transcode.findOne(body).exec()
    res.json(getTrans)  
  }, 1000);
}
