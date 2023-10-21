const express = require("express");

const { getUserById } = require("../controllers/User/getUserById");
const { isAuthenticated } = require("../middlewares/auth");

const User__Router = express.Router();
User__Router.use(isAuthenticated)
User__Router.get("/:id",getUserById);

module.exports = {
	User__Router,
};
