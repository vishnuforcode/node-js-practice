const mongoose = require('mongoose')



const studentSchema = new mongoose.Schema({


    name:{
       type:String,
       required:true
    },
    Rollno:{
        type:Number,
        required:true,
        unique:true
    },
    class:{
        type: Number,
        required: true
    },
    FathersName:{
        required:true,
        type:String

    },
    MothersName:{
        required:true,
        type:String

    },


})

const students = mongoose.model('students', studentSchema)

module.exports = students
