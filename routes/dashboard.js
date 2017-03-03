
/*
 * GET home page.
 */
var closetData = require('../closetdata.json');
var defaultData = require('../default.json');

exports.view = function(req, res){
	console.log(closetData);
	console.log(defaultData);
	// Add the flag for Alternative 
	closetData["showAlternate"] = false;
	console.log("showAlternate is false");
	// display the dash board 
	res.render('dashboard');
};

exports.viewAlternate = function(req, res){
	onsole.log(closetData);
	console.log(defaultData);
	// Add the flag for Alternative 
	closetData["showAlternate"] = true;
	console.log("showAlternate is false");
     // diaplay the dash board 
     res.render('dashboard'); 
};