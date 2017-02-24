var closetdata = require('../closetdata.json');
var clothes;
var fs = require('fs');

exports.view = function(req, res){
  res.render('closet', closetdata);
};

exports.view = function(req, res){

	res.render('closet', closetdata);
  	
};


/*
>>>>>>> 9174d181312edba2b1ad2d0110341a2079eb73c1
const Vision = require('@google-cloud/vision');
const projectId='ewear-159500';
const visionClient = Vision({
	projectId: projectId
});
<<<<<<< HEAD

for( var i in closetdata ){
	clothes = closetdata[i];
	imageURL = clothes["imageURL"];
	console.log(closetdata[0]);
}

/*
for each (clothes in closetdata){ 
	clothesImg = closetdata["imageURL"];
	console.log(fileName);

	
=======
<<<<<<< HEAD

=======
/*
>>>>>>> parent of 79218ed... fix the problem with javascript linkage
for each(clothes in closetdata){ 
	clothes.fileName = closetdata["imageURL"];
	console.log(fileName);

	/*
>>>>>>> 9174d181312edba2b1ad2d0110341a2079eb73c1
	visionClient.detectLabels(fileName)
	.then((results) => {

		const labels = results[0];
		console.log('Labels:');
		labels.forEach((label) => console.log(label));

	    //fs.readFile('like.json', function (err, data) {
   	    //var json = JSON.parse(data);
   	    //json.like.push(labels);

   	    //fs.writeFile("like.json", JSON.stringify(json))
    
    //})

	})
<<<<<<< HEAD
}
=======
});
>>>>>>> 9174d181312edba2b1ad2d0110341a2079eb73c1
*/

