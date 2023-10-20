
require("./config/mongoose-config")
const express = require("express")
const { register } = require("./controllers/register")
const { login } = require("./controllers/login")
const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())


app.post("/register",register ) 
app.post("/login",login)
app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})