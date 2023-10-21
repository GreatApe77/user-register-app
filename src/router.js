const express = require("express");
const { Auth__Router } = require("./routes/Auth");

const router  = express.Router()



router.use("/auth",Auth__Router)

module.exports = {
    router
};
