const express=require('express')
const app=express()
dotenv=require('dotenv').config()

app.use('/api/contacts',require("./routes/contactRoutes"))

port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})