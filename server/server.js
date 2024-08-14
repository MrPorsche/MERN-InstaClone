const Express = require("express");
const App = Express();
const PORT = 5000;
const Mongoose = require("mongoose");
const MongoURI = require('./keys.js');
const CORS = require("cors");


App.use(CORS());
require("./models/Users.js");

App.use(Express.json());
App.use(require("./routes/Auth.js"));

Mongoose.connect(MongoURI);

Mongoose.connection.on("connected", () => {
    console.log("Connection SUCCESSFUL to MongoDB!");
});

Mongoose.connection.on("error", () => {
    console.log("Connection FAILED to MongoDB!");
});

App.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
    
});