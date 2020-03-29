module.exports = function(app){

	// wooooo checking if the app is alive
	app.get('/healthcheck', function (req, res) {
	 	res.status(200);
		res.json({ working: true });
		res.end(); // wtf do we need this?

		console.log("Healthcheck returned 200")
	})
}
