
require("./config/mongoose-config")
const express = require("express")

const morgan = require("morgan")
const { router } = require("./router")
const PORT = process.env.PORT || 8080
const app = express()

app.use(morgan("tiny"))
app.use(express.json())

//tesd 
app.use(router)
app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})