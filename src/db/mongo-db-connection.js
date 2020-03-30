var mongoose = require('mongoose')
var mongoUrl = "mongodb://mongo:27017/"

var connectWithRetry = function() {
  return mongoose.connect(mongoUrl, function(err) {
    if (err) {
      console.error('Failed to connect to mongo on startup - retrying in 10 sec')
      setTimeout(connectWithRetry, 10000)
    } else{
    	console.log("Connected to MongoDB")
    }
  });
};

connectWithRetry();