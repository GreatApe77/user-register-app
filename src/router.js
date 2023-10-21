const express = require("express");
const { User__Router } = require("./routes/User");

const router  = express.Router()



router.use("/auth",User__Router)

module.exports = {
    router
};
