let axios = require('axios');
module.exports = {
    qrDecode: (req,res,next)=>{
        let {...body} = req.body
        let data = '';
        let config = {
          method: 'post',
          url: 'http://localhost:8090/TotalControl/v2/devices/'+body.device+'/sendAai?token='+req.headers.authorization+'&params={query:\'T:'+body.trans_id+'\',action:\'getText\'}',
          headers: { },
          data : data
        };
      setTimeout(()=>{
        axios(config)
        .then(function (response) {
            if(response.data.value.retval){
            let config = {
                method: 'post',
                url: 'http://localhost:8090/TotalControl/v2/devices/'+body.device+'/sendAai?token='+req.headers.authorization+'&params={query:\'R:.otp_txtCode\',action:\'getText\'}',
                headers: { },
                data : data
              };
              
              axios(config)
              .then(function (response) {
                res.json(response.data.value.retval.replace(/\s/g, ''));
              })
            }
        }).catch(err => {
            res.json({
                status:404,
                code:"Invalid Params"
            })
        });
      },1000)
    }
}