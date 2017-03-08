//var closetdata = require('../closetdata.json');
var clothes;

'use strict';
$(document).ready(function() {
	initializePage();

	// Display the image on closet page 
	//displayImg(closetdata);

})


function initializePage() {
	console.log("Here is the page for closet images");
}

function displayImg(closetdata){
	for( var i in closetdata ){
		clothes = closetdata[i];
		imageURL = clothes["imageURL"];
		console.log(closetdata[0]);
	}
}
