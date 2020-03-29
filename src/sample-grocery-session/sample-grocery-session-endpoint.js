module.exports = function(app){

	// sample get
	app.get('/schedule-grocery-session', function (req, res) {
	  res.send('whole foods sucks') 
	  console.log("schedule-grocery-session get endpoint hit or whatever")
	})

	// sample post
	app.post('/schedule-grocery-session', function (req, res) {
	  res.send('whole foods rocks') 
	})
}