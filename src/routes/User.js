const express = require("express");
const { register } = require("../controllers/Auth/register");
const { login } = require("../controllers/Auth/login");

const User__Router = express.Router();

User__Router.get("/:id");

module.exports = {
	User__Router,
};
