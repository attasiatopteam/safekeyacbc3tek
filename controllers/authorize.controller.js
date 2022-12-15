var axios = require('axios');
module.exports = (req,res,next)=>{
        let config = {
        method: 'get',
        url: 'http://localhost:8090/TotalControl/v2/devices?q=all&token='+req.token,
        headers: { }
        };
        axios(config)
        .then(function (response) {
            res.json({
                status:200,
                token:req.token,
                device: response.data.ids
            });
        }).catch(function (error) {
            res.json({
                status:401,
                mess:"Sai thông tin đăng nhập"
            });
        });
    }
