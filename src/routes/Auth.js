const express = require("express");
const { register } = require("../controllers/Auth/register");
const { login } = require("../controllers/Auth/login");
const { registerValidator } = require("../middlewares/registerValidator");
const { loginValidator } = require("../middlewares/loginValidator");

const Auth__Router = express.Router();

Auth__Router.post("/register", registerValidator,register);
Auth__Router.post("/login",loginValidator, login);

module.exports = {
	Auth__Router,
};
