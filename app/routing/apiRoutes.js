//dependencies
var path = require("path");
var friendData = require("../data/friends");

module.exports = function(app) {

	//display JSON of all possible friends
	app.get("/api/friends", function(req,res) {
		res.json(friendData);
	});

	//handle incoming survey results & compatibility logic (post)
	app.post("/api/friends", function(req, res) {
		var newfriendTest = req.body
		console.log(newfriendTest);

		//compare compatibility here:
		//Math.abs(newfriend minus result)
		//loop through the new friend to compare numbers
	});
}

