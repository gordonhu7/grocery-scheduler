module.exports = function(app,path){
		
	//var path = require('path');
	app.get('/login', function(req, res) {
	    res.sendFile(path.join(__dirname + '/login.html'));
	    res.status(200)
	});

	//https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js
	app.post('/login', function (req, res) {
	  username = req.body.username
	  password = req.body.password

	  if (username == '' || password == ''){
	  	res.send("Must supply a username and password!")
	  	res.status(401)
	  	res.end()
	  }
	  
	  res.status(200)
	  res.send("hahah just got your password")
	  res.end()
	})
}