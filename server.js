// Initialize required packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express setup and Heroku settings
var app = express();
var PORT = process.env.PORT || 8080;

// Setting up Express app to handle the data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Pointing the server to a series of "route" files.
require("./app/routing/apiRoutes.js")(app, path);
require("./app/routing/htmlRoutes.js")(app, path);

// "Starting" the server by listening for a request
app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});