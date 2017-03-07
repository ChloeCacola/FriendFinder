//dependencies
var path = require("path");
var friendData = require("../data/data");

module.exports = function(app) {

	//display JSON of all possible friends
	app.get("/api/friends", function(req,res) {
		res.json(friendData);
	});

	//handle incoming survey results & compatibility logic (post)
	app.post("/api/friends", function(req, res) {
		var newfriend = req.body
		console.log(newfriend);

		//compare compatibility here:
	});
}

