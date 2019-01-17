var express = require('express');
var router = express.Router();

var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var app = express();


app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
module.exports = router;
