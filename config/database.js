const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        await mongoose.connect('mongodb+srv://f8shcoop:789Bet1@cluster0.tevsb74.mongodb.net/shpaysafekey?retryWrites=true&w=majority')
        console.log('Database Connect Successfully')
    } catch (error) {
        console.log("Lỗi kết nối"+error)
    }
}

module.exports = connectDb
