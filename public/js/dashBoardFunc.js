'use strict';
var indexI = 0;
var indexJ = 0;

// Call this function when page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

	$('.Choice button').click(clickShirt);
	$('.Choice button').click(clickPants);

})

/*
 * Function that is called when the document is ready. 
 */
 function initializePage() {
 	console.log("dashBoardFunc is connected");
 }

/*
// put in the button part of shirt and pant in handlebar 
onclick = "clickShirt()"
onclick = "clickPants()"

// Call this function when shirt button get clicked 
function clickShirt(e) {
	var shirt = ["/images/shirt1.png","/images/shirt2.png","/images/shirt3.png","/images/shirt4.png"];
	var x = document.getElementById("Shirt");
	indexI += 1;
	x.setAttribute( "src", shirt[indexI] );

	// Switch to the new outfit 
	$.get("/outfit", switchShirt);
}

// Call this fucntion when pants button get clicked 
function clickPants(e) {
	var pants = ["/images/pant1.png","/images/pant2.png","/images/pant3.png","/images/pant4.png"];
	var y = document.getElementById("Pants");
	indexJ += 1;
	y.setAttribute( "src", pants[indexJ] );

	// Switch to the new outfit 
	$.get("/outfit", switchPants);
}
*/

/* When the button get clicked */
// Call this function when shirt button get clicked 
function clickShirt(e) {
	console.log("the shirt button is clicked");
	$.get("/outfit", switchShirt);
}

// Call this fucntion when pants button get clicked 
function clickPants(e) {
	console.log("the pant button is clicked");
	$.get("/outfit", switchPants);
}

/* The switch function for shirt to replace by a new shirt */
function switchShirt(result) {
	// Display the fetched result to help debugging 
	console.log("switchShirt get clicked");
	console.log(result);
	var shirt = '<div>' + '<img src =" ' + result['imageURL'] + ' “ class="Outfit" id="Shirt" >' + '</div>';
	// Replace the original image by the new image from json 
	$('.shirtImg').html(shirt);
}

/* The switch function for pant to replace by a new pant */
function switchPants(result) {
	// Display the fetched result to help  debugging 
	console.log("switchPants get clicked");
	console.log(result);
	var pants = '<div>' + '<img src =" ' + result['imageURL'] + ' “ class="Outfit" id="Pants" >' + '</div>';
	// Replace the original image by the new image from json 
	$('.pantsImg').html(pants);

}