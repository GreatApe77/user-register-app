const User = require("../../models/User")

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const getUserById = async (req,res)=>{
    const id = req.params.id

    try {
        const user = await User.findById(id,"-password")

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
    } catch (error) {
        
    }
}

module.exports = {
    getUserById
}