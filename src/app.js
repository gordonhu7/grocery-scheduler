//Load express module with `require` directive
var express = require('express')
var app = express()

// importing the endpoints as routes to the app
require('./healthcheck/healthcheck-endpoint')(app)
require('./homepage/homepage-endpoint')(app)
require('./sample-grocery-session/sample-grocery-session-endpoint')(app)

//example of how to define an endpoint
//app.get('/', function (req, res) {
//  res.send('goodbye coronavirus') 
//})

//Launch listening server on port 8081
app.listen(8000, function () {
  console.log('app listening on port 8000!')
})