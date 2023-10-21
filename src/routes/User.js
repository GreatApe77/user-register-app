const express = require("express");
const { register } = require("../controllers/register");
const { login } = require("../controllers/login");

const User__Router  = express.Router()



User__Router.post("/register",register)
User__Router.post("/login",login)

module.exports = {
    User__Router
};
