//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('goodbye coronavirus') 
  // maybe homepage here or smth
})

// wooooo checking if the app is alive
app.get('/healthcheck', function (req, res) {
 	res.status(200);
	res.json({ working: true });
	res.end(); // wtf do we need this?
})

// probably should define seperate files for each endpoint as logic
// might get a bit complicated 
app.get('/schedule-grocery-session', function (req, res) {
  res.send('whole foods sucks') 
})


//Launch listening server on port 8081
app.listen(8000, function () {
  console.log('app listening on port 8000!')
})