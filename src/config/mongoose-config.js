require("dotenv").config();
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
	.connect(
		process.env.MONGOOSE_CONNECTION_STRING
			? process.env.MONGOOSE_CONNECTION_STRING
			: process.env.CLOUD_MONGO_CONNECTION_STRING,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.log("Conectou ao mongoose");
	})
	.catch((err) => {
		console.error(err);
	});
