const express = require('express')
const port = 3000
const app = express()

const db = require('./db') 
const bodyparser = require('body-parser')
const routes = require("./routes/students")




app.use(bodyparser.json())


app.use('/students' , routes)





app.get('/', (req,res)=>{
    res.send("<h1> Hello Welcome to our school </h1>")
})


app.listen(port , ()=>{
    console.log(`websit listening on port ${port} ` )
})



      

      
