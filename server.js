'use strict';
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");

// PUBLIC ROUTES
  app.use('/app', express.static(__dirname + "/app"))
  app.use('/files',express.static(__dirname + "/public"))
  app.use('/files', express.static(__dirname + "/libraries"))
  app.use('/files', express.static(__dirname + "/bower_components"))
  app.use('/files/bootstrap', express.static(__dirname + "/bower_components/bootstrap/dist"))
  app.use('/files/bootstrap/slider', express.static(__dirname + "/bower_components/bootstrap-slider"))

// dynamic routes
app.get("/", (req, res, next) => res.status(200).sendFile(__dirname + "/app/index.html"))

app.listen(1133, ()=>console.log("listening on 1133"));

module.exports = app;
