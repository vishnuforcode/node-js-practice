const express = require('express')
const router = express.Router()

const students = require('../students')

router.post('/', async (req,res)=>{
    try{
        const data = req.body
        const newStudent = new students(data)
        const response = await newStudent.save()

        console.log("data saved success")
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json({error: "Internal server error"})

    }
})

router.delete("/:id", async (req,res)=>{

    try{
        const id = req.params.id
        const response = await students.findByIdAndDelete(id)

        console.log("delted successfully")
        res.status(200).json({message : "student deleted successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Internal server error"})

    }
} )





module.exports = router

