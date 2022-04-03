const database = require("mongoose");
const is_heroku = process.env.IS_HEROKU || false;
const databaseName = "lab_example"

const herokuURI =
	"mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.4ulcc.mongodb.net/" + databaseName + "?retryWrites=true&w=majority"

const localURI = "mongodb://127.0.0.1/" + databaseName + "?authSource=admin&retryWrites=true"
// 127.0.0.1

if (is_heroku) {
	database.connect(herokuURI, { useNewUrlParser: true, useUnifiedTopology: true });
} else {
	database.connect(localURI, {useNewUrlParser: true, useUnifiedTopology: true});	
}

module.exports = database;


