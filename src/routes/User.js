const express = require("express");
const { register } = require("../controllers/Auth/register");
const { login } = require("../controllers/Auth/login");
const { getUserById } = require("../controllers/User/getUserById");
const { isAuthenticated } = require("../middlewares/Auth");

const User__Router = express.Router();
User__Router.use(isAuthenticated)
User__Router.get("/:id",getUserById);

module.exports = {
	User__Router,
};
