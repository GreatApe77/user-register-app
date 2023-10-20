require("dotenv").config()
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.SECRET_KEY || "Salzin? KKKKKK"
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const login = async (req,res)=>{
    const {password,nickname} = req.body
    try {
        const user = await User.findOne({ $or:[{nickname:nickname},{email:nickname}]})
        if(user){
            const passwordCorrect = await bcrypt.compare(password,user.password)
            
            if(!passwordCorrect){
                return res.status(400).json({
                    success:false,
                    message:"Wrong Password"
                })
            }
            const token =  jwt.sign({fullName:user.fullName},SECRET_KEY,{expiresIn:"1h"} )
            return res.status(200).json({
                success:true,
                message:"Login successful!",
                token:token
            })
        }else{
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
    } catch (error) {
        
    }
}

module.exports = {
    login
};
