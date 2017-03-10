'use strict';
var indexS = 0;
var indexP = 0;

var outfitDB;
var shirtDB = [];
var pantDB = [];

var temperature = 78; 

// Call this function when page loads (the "ready" event)
$(document).ready(function() {
	// intialize content of page when it is ready
	initializePage();

	$.get("/outfit", function(result) {
		outfitDB = result;
		if ( temperature < 30 ) {
			clothesClassifier( "jacket", "jeans", outfitDB );
		}
		else if ( temperature > 75 ) {
			clothesClassifier( "shirt", "skirt", outfitDB );
		}
		else {
			clothesClassifier( "sweater", "pant", outfitDB );
		}
	});
})

/*
 * This function will search through all the data in closetData 
 * and return the shirts and pants for appropriate temperature 
 */
function clothesClassifier( shirtKey, pantKey, outfitDB ) {

	// counter for for loop 
	var counter;			// the counter for searching through label 

	// read outfit DB and store to shirt/pant DB 
	for( var i = 0; i < outfitDB.closetdata.length; i++) {
		
		var currentC = outfitDB.closetdata[i];       // the current clothes working with
		// push the outfit to shirt DB when it is  a shirt
		if( currentC.imageURL.includes("shirt") ) {
			// chek the shirt against shirtKey 
			for ( counter = 0 ; counter < currentC.label.length; counter ++ ) {
				// Compare the label with shirt 
				if (currentC.label[counter] == shirtKey) {
					shirtDB.push(currentC);
					console.log(currentC);
				}
			}
		}
		// push the outfit to pant DB when it is a pant 
		else{
			// chek the pant against shirtKey 
			for ( counter = 0 ; counter < currentC.label.length; counter ++ ) {
				// Compare the label with shirt 
				if (currentC.label[counter] == pantKey) {
					pantDB.push(currentC);
					console.log(currentC);
				}
			}
		}
	}
}

/*
 * Function that is called when the document is ready. 
 */
function initializePage() {
	console.log("dashBoardFunc is connected");
}

// Calling the switch option for shirt from image directly 
function ImgclickShirt(e) {
	console.log("the shirtclick is triggered from image");
	// the trigger for google analytics 
	ga('create', 'UA-92899008-1', 'auto');
	ga('send', 'pageview');
	ga('send','event','image','click');
	ga('send','event','switchAction','click');
	switchShirt();
}

// Calling the switch option for shirt from image directly 
function ImgclickPants(e) {
	console.log("the pantclick is triggered from image");
	// the trigger for google analytics 
	ga('create', 'UA-92899008-1', 'auto');
	ga('send', 'pageview');
	ga('send','event','image','click');
	ga('send','event','switchAction','click');
	switchPants();
}

// Call this fucntion when shirts button get clicked from Alternative 
function AclickShirt(e) {
	console.log("the shirt button is clicked");
	// the trigger for google analytics 
	ga('create', 'UA-92899008-1', 'auto');
	ga('send', 'pageview');
	ga('send','event','button','click');
	ga('send','event','switchAction','click');
	ga('send','event','Alternative','click');
	switchShirt();
}

// Call this fucntion when shirts button get clicked from the original 
function OclickShirt(e) {
	console.log("the shirt button is clicked");
	// the trigger for google analytics 
	ga('create', 'UA-92899008-1', 'auto');
	ga('send', 'pageview');
	ga('send','event','button','click');
	ga('send','event','switchAction','click');
	ga('send','event','original','click');
	switchShirt();
}

// Call this fucntion when pants button get clicked from Alternative
function AclickPants(e) {
	console.log("the pant button is clicked");
	// the trigger for google analytics 
	ga('create', 'UA-92899008-1', 'auto');
	ga('send', 'pageview');
	ga('send','event','button','click');
	ga('send','event','switchAction','click');
	ga('send','event','Alternative','click');
	switchPants();
}

// Call this fucntion when pants button get clicked from the original 
function OclickPants(e) {
	console.log("the pant button is clicked");
	// the trigger for google analytics 
	ga('create', 'UA-92899008-1', 'auto');
	ga('send', 'pageview');
	ga('send','event','button','click');
	ga('send','event','switchAction','click');
	ga('send','event','original','click');
	switchPants();
}

/* The switch function for shirt to replace by a new shirt */
function switchShirt() {
	// Display the fetched result to help debugging 
	console.log("switchShirt get clicked");
	ga('create', 'UA-92899008-1', 'auto');
	ga('send', 'pageview');
	ga('send','event','shirt','click');
	
	var targetIndex = indexS % shirtDB.length;
	indexS = (indexS + 1) % shirtDB.length;

	// Display the iamge desired with id 
	$("#ShirtImgDisplay").attr('src', shirtDB[targetIndex]['imageURL']);
}

/* The switch function for pant to replace by a new pant */
function switchPants() {
	// Display the fetched result to help  debugging 
	console.log("switchPants get clicked");
	ga('create', 'UA-92899008-1', 'auto');
	ga('send', 'pageview');
	ga('send','event','pants','click');
	
	var targetIndex = indexP % pantDB.length;
	indexP = (indexP + 1) % pantDB.length;
	
	// Display the image desired with id 
	$("#PantsImgDisplay").attr('src', pantDB[targetIndex]['imageURL']);
}