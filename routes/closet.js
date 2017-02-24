var closetdata = require('../closetdata.json');
var clothes;
var fs = require('fs');

exports.view = function(req, res){
  res.render('closet', closetdata);
};

exports.view = function(req, res){

	res.render('closet', closetdata);
  	
};

