// Get the closet data for clothes 
var closetData = require('../closetdata.json');
var defaultData = require('../default.json');


exports.outfitInfo = function(req, res) {

	console.log("enter outfit info return function");

	if (closetData !== null) {
		res.send(closetData);
	}
	else{
		res.send(defaultData);
	}
	
}