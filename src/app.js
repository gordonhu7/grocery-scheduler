//Load express module with `require` directive
var express = require('express')
var app = express()

require('./healthcheck/healthcheck-endpoint')(app)
require('./sample-grocery-session/sample-grocery-session-endpoint')(app)

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('goodbye coronavirus') 
  // maybe homepage here or smth
})

//Launch listening server on port 8081
app.listen(8000, function () {
  console.log('app listening on port 8000!')
})