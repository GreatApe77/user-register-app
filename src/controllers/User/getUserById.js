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

        return res.status(200).json(user.toJSON())
    } catch (error) {
        console.error(error)
        return res.sendStatus(500)
    }
}

module.exports = {
    getUserById
}