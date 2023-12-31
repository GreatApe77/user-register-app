require("dotenv").config();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const register = async (req, res) => {
	const { fullName, password, nickname, email } = req.body;
	let hashedPassword;
	try {
		const user = await User.findOne({
			$or: [{ nickname: nickname }, { email: email }],
		});
		if (user) {
			return res.status(400).json({
				success: false,
				message: "User Already Registered!",
			});
		}
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
	try {
		hashedPassword = await bcrypt.hash(password, 10);
	} catch (error) {
		console.error(error);
		return res.sendStatus(500);
	}

	try {
		const user = new User({
			nickname,
			fullName,
			email,
			password: hashedPassword,
		});
		await user.save();
		return res.status(200).json({
			success: true,
			message: "User registered!",
		});
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
};

module.exports = {
	register,
};
