require("dotenv").config()
const express = require("express")
const app = express()
require("./db/conn")
const port = 8080


app.get("/",(req,res)=>{
    res.json("server start bhai")
})

app.listen(port,()=>{
    console.log(`server started at ${port}`)
})