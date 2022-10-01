require("dotenv").config()
require("./db/conn")
const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./routes/router")



const port = 8080

app.use(express.json())
app.use(router)
app.use(cors())

//static path

app.use("/uploads", express.static("./uploads"))


app.listen(port,()=>{
    console.log(`server started at ${port}`)
})