var closetdata = require('../closetdata.json');
var clothes;
var fs = require('fs');

/*
exports.view = function(req, res){
  res.render('closet', closetdata);
};
*/

exports.view = function(req, res){

	res.render('closet', closetdata);
	// the trigger for google analytics 
	ga('create', 'UA-92899008-1', 'auto');
	ga('send', 'pageview');
	ga('send','event','closet','click');

};

