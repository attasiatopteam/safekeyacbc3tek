var axios = require('axios');
module.exports = (req,res,next)=>{
    let {...body} = req.headers
    let pass = btoa(body.user+":"+body.password)
    let config = {
        method: 'get',
        url: 'http://localhost:8090/TotalControl/v2/login',
        headers: { 
            'Authorization': pass
        }
    };
    axios(config).then(function (response) {
        req.token = response.data.value.token;
        next()
    }).catch(function (error) {
        res.json({
            status:401,
            mess:"Sai thông tin đăng nhập"
        });
    });
}