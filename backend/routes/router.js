const express = require("express")

const router = new express.Router()

router.get("/", (req,res) =>{
res.json("server start hai bhai router par")
})


module.exports = router