var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();

module.exports = function(app) {
    //Home page
    app.get("/", function(request, response) {
        response.sendFile(path.join(__dirname + "/../public/home.html"));
    });
    
    //Survey Page
    app.get("/survey", function(request, response) {
        response.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
};