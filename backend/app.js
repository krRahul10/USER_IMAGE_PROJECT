require("dotenv").config()
const express = require("express")
const app = express()
const router = require("./routes/router")
require("./db/conn")
const port = 8080
app.use(router)


app.listen(port,()=>{
    console.log(`server started at ${port}`)
})