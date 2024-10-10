const express=require('express')
const erroHandler = require('./middlewares/errorHandler')
const app=express()
dotenv=require('dotenv').config()

app.use(express.json())
app.use('/api/contacts',require("./routes/contactRoutes"))
app.use(erroHandler)

port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})