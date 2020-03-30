//Load express module with `require` directive
var express = require('express')
var app = express()

// for parsing request body apparently
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// node utility for working with file paths to serve html pages
var path = require('path')

// importing the endpoints as routes to the app
require('./healthcheck/healthcheck-endpoint')(app)
require('./homepage/homepage-endpoint')(app)
require('./login/login-endpoint')(app,path)
require('./sample-grocery-session/sample-grocery-session-endpoint')(app)

// mongo db connection
require("./db/mongo-db-connection")

//Launch listening server on port 8081
app.listen(8000, function () {
  console.log('app listening on port 8000!');
})