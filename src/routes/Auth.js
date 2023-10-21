const express = require("express");
const { register } = require("../controllers/Auth/register");
const { login } = require("../controllers/Auth/login");

const Auth__Router = express.Router();

Auth__Router.post("/register", register);
Auth__Router.post("/login", login);

module.exports = {
	Auth__Router,
};
