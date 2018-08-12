var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Mount the routes
var htmlRoutes = require("../FriendFinder/app/routing/htmlRoutes");
var apiRoutes = require("../FriendFinder/app/routing/apiRoutes");

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, function() {
    console.log("Listening on Port: " + PORT);
});
