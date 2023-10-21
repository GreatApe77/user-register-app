const UserValidator = require("../lib/UserValidator")
/**
 * Middleware de validacao para o registro de usuários
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const registerValidator = (req, res, next) => {
	const { email, password, nickname, fullName } = req.body;

	if (!email || !password || !nickname || fullName){
        
		return res.status(400).json({
            success: false,
            message: "Missing required fields",
        });
    }

    if(!UserValidator.validEmail(email)){
        return res.status(400).json({
            success: false,
            message: "Invalid email. must contain @",
        })
    }
    if(!UserValidator.validPassword(password)){
        return res.status(400).json({
            success: false,
            message: "Invalid password. must contain at least 8 characters and one special character",
        })
    }

    if(!UserValidator.validNickname(nickname)){
        return res.status(400).json({
            success: false,
            message: "Invalid nickname. must contain at least 4 characters and no spaces in between",
        })
    }

};
