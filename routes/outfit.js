// Get the closet data for clothes 
var closetData = require('../closetdata.json');
var defaultData = require('../default.json');
var outfit;

exports.outfitInfo = function(req, res) {

	// generate a random ID for the program
	var outfitID = req.params.id;
	if (outfitID == "random") {
		outfitID = Math.floor(Math.random() * defaultData.length) + 1;
	} else {
		outfitID = parseInt(outfitID);
	}
	outfitID = outfitID % 7;
	outfit = defaultData[outfitID-1];

	// When closet is not empty, grab information from the closet 
	if (closetData !== null) {
		// Off by one, since our first outfit is at index 0
		outfit = closetData[outfitID-1];
	}
	// Use the default closet when there is no user inpyt clothes 
	else {
		outfit = defaultData[outfitID-1];
	}

	// Get the outfit from json file 
	res.json(outfit);
	
}