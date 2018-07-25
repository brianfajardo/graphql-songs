const mongoose = require("mongoose");

const models = require("./models");
const schema = require("./schema/schema");
const { MONGO_LAB_URI } = require("../config");

mongoose.Promise = global.Promise;

mongoose.connect(
	MONGO_LAB_URI,
	{ useMongoClient: true }
);

mongoose.connection
	.once("open", () => console.log("✅  Connected to MongoLab instance."))
	.on("error", error =>
		console.log("🔥  Error connecting to MongoLab:", error)
	);
