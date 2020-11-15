const User = require("./../db/user.model")
const parser = require('mongodb-query-parser')

module.exports = function(app,path){
		
	//var path = require('path');
	app.get('/login', function(req, res) {
	    res.sendFile(path.join(__dirname + '/login.html'));
	    res.status(200)
	});

	//https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js
	app.post('/login', async (req, res) => {
	    username_input = req.body.username
	    password_input = req.body.password
	 
	    if (username_input == '' || password_input == ''){
	  	  res.send("Must supply a username and password!")
	  	  res.status(401)
	  	  res.end()
	    }
	
		var user = await findUser(username_input)
		if (user === null){
			res.status(200)
			res.send("User " + username_input + " not found")
			res.end()
		}

		if (await checkPassword(user, password_input) == true){
			res.status(200)
			res.send(username_input + " logged in!!!")
			res.end()
			
		} else {
			res.status(200)
			res.send("wrong password")
			res.end()
		}

	})
}

async function findUser(username_input){
	const user = await User.find({ username: username_input })
	if (user.length == 0){
		return null
	}
	return user[0]
}

async function checkPassword(user, password_input){
	if (user.password == password_input){
		return true
	}
	return false
}