
const jwt = require("jsonwebtoken")
require("dotenv").config()
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
const isAuthenticated = async (req,res,next)=>{

    const authHeader = req.headers["authorization"]
    console.log(authHeader)
    const token = authHeader&& authHeader.split(" ")[1]

    if(!token){
        return res.status(401).json({
            success:false,
            message:"Denied Access"
        })
    }

    try {
        
        const SECRET_KEY = process.env.SECRET_KEY

        jwt.verify(token,SECRET_KEY)
        next()
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            success:false,
            message:"Invalid Token"
        })
    }
}

module.exports = {
    isAuthenticated
};
