const mongoose = require('mongoose')
const students = require('./students')

const mongoURL = 'mongodb://localhost:27017/School'


mongoose.connect(mongoURL )
const db = mongoose.connection

db.on('connected', ()=>{
    console.log("connected to mongodb server")
})
db.on('disconnected', ()=>{
    console.log("disconected to mongoserver")
})
db.on('error', (err)=>{
    console.log("error in connecting to server")
})



module.exports = db