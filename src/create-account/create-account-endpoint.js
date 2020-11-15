const User = require("./../db/user.model")

module.exports = function(app,path){
		
	//var path = require('path');
	app.get('/create-account', function(req, res) {
	    res.sendFile(path.join(__dirname + '/create-account.html'));
	    res.status(200)
	});

	//https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js
	app.post('/create-account', async (req, res) => {

        email = req.body.email
        username = req.body.username
	    password = req.body.password

        if (email == '' || username == '' || password == ''){
	  	  res.send("Must supply a username and password!")
	  	  res.status(401)
	  	  res.end()
	    }

        if (await createUser(email, username, password) == true){
            res.status(200)
            res.send("Created new user: " + username) //does js have f strings like python?
            res.end()      
        } else {
            res.status(200)
            res.send("User: " + username + " already exists") //does js have f strings like python?
            res.end()
        }

	})
}

// if user found return true, user not found, return false
async function findUser(username){
	const user = await User.find({ username: username })
    if (user.length != 0){
		return true
	}
	return false
}

async function createUser(email, username, password){
    // checking if the username is already used so there are no data overrides
    var user = await findUser(username)
    if (user === false){
      const user = new User({ username: username, email: email, password: password });
      await user.save().then(() => console.log(username + " created"));
      return true
    }
    return false
}