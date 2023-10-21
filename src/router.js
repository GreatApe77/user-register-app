const express = require("express");
const { Auth__Router } = require("./routes/Auth");
const { User__Router } = require("./routes/User");

const router  = express.Router()



router.use("/auth",Auth__Router)
router.use("/users",User__Router)
module.exports = {
    router
};
