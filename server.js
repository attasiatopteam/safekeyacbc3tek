const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const Router = require('./routers')
const connectDB = require('./config/database')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
mongoose.set('strictQuery', false);
app.use(cors())
connectDB()

Router(app)
app.get('/',(req,res,next)=>{
    res.send('hello world')
})
app.listen('3000',()=>{
    console.log('server running at port 3000')
})