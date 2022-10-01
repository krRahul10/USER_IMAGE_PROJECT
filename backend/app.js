const express = require("express")
const app = express()
const port = 8080


app.get("/",(req,res)=>{
    res.json("server start bhai")
})

app.listen(port,()=>{
    console.log(`server started at ${port}`)
})