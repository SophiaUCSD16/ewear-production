'use strict';
var indexS = 0;
var indexP = 0;

var outfitDB;
var shirtDB = [];
var pantDB = [];

// Call this function when page loads (the "ready" event)
$(document).ready(function() {
	// intialize content of page when it is ready
	initializePage();

	$.get("/outfit", function(result) {
		outfitDB = result;
		// read outfit DB and store to shirt/pant DB 
		for( var i = 0; i < outfitDB.closetdata.length; i++) {
			// push the outfit to shirt DB when it is  a shirt
			if( outfitDB.closetdata[i].imageURL.includes("shirt") ) {
				shirtDB.push(outfitDB.closetdata[i]);
			}
			// push the outfit to pant DB when it is a pant 
			else{
				pantDB.push(outfitDB.closetdata[i]);
			}
		}
	});
})

/*
 * Function that is called when the document is ready. 
 */
function initializePage() {
	console.log("dashBoardFunc is connected");
}

function clickShirt(e) {
	console.log("the shirt button is clicked");
	switchShirt();
}

// Call this fucntion when pants button get clicked 
function clickPants(e) {
	console.log("the pant button is clicked");
	switchPants();
}

/* The switch function for shirt to replace by a new shirt */
function switchShirt() {
	// Display the fetched result to help debugging 
	console.log("switchShirt get clicked");
	
	var targetIndex = indexS % shirtDB.length;
	indexS = (indexS + 1) % shirtDB.length;

	// Display the iamge desired with id 
	$("#ShirtImgDisplay").attr('src', shirtDB[targetIndex]['imageURL']);
}

/* The switch function for pant to replace by a new pant */
function switchPants() {
	// Display the fetched result to help  debugging 
	console.log("switchPants get clicked");
	
	var targetIndex = indexP % pantDB.length;
	indexP = (indexP + 1) % pantDB.length;
	
	// Display the image desired with id 
	$("#PantsImgDisplay").attr('src', pantDB[targetIndex]['imageURL']);
}