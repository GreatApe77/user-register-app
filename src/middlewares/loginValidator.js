const UserValidator = require("../lib/UserValidator");

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
const loginValidator = (req, res, next) => {
    const { nickname,password } = req.body;

    if (!nickname || !password){
        return res.status(400).json({
            success: false,
            message: "Missing required fields. Nickname and password are required",
        });
    }
    if(nickname.includes("@")){

        if(!UserValidator.validEmail(nickname)){
            return res.status(400).json({
                success: false,
                message: "Invalid email. must contain @",
            })
        }
    }else{
        if(!UserValidator.validNickname(nickname)){
            return res.status(400).json({
                success: false,
                message: "Invalid nickname. must contain at least 4 characters and no spaces in between",
            })
        }}
    if(!UserValidator.validPassword(password)){
        return res.status(400).json({
            success: false,
            message: "Invalid password. must contain at least 8 characters and one special character",
        })
    }

    next();
}
module.exports = {
    loginValidator,
};
