const express = require('express')
const app = express()
const cors = require('cors')
const Router = require('./routers')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

Router(app)
app.get('/',(req,res,next)=>{
    res.send('hello world')
})
app.listen('3000',()=>{
    console.log('server running at port 3000')
})