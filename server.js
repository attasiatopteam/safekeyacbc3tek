const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const ejs = require('ejs')
const Router = require('./routers')
const connectDB = require('./config/database')

app.set('view engine', 'ejs')
app.set('views','./views')
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
mongoose.set('strictQuery', false);
app.use(cors())
connectDB()

Router(app)
app.get('/',(req,res,next)=>{
    res.render('index')
})
app.listen('3000',()=>{
    console.log('server running at port 3000')
})