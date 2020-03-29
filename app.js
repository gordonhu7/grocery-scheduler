//Load express module with `require` directive
var express = require('express')
var app = express()

// TODO: use relative paths and not hardcoded paths
// Keep the endpoint in seperate files
// https://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express
require('./healthcheck/healthcheck-endpoint')(app);
require('./sample-grocery-session/sample-grocery-session-endpoint')(app);

// maybe have a login page idk
// something something require('./login/login_endpoint')(app)

// Define request response in root URL (/)
// probably should define seperate files for each endpoint as logic
// might get a bit complicated 
app.get('/', function (req, res) {
  res.send('goodbye coronavirus') 
  // maybe homepage here or smth
})

//Launch listening server on port 8000
app.listen(8000, function () {
  console.log('app listening on port 8000!')
})