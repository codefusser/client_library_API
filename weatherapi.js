//This snippet is a sample of using a JavaScript client library to access a public API

//require the https module to enable a connection to the https protocol URL of the public API
let http = require('http');

//Use the GET method to send a request to the API which will pass the response to the callback
let request = http.get('http://api.apixu.com/v1/current.json?key=9e57f6b318a84c0fa7421756170904&q=Lagos', function(response){
	let weatherData = "";
	//console.log(response.statusCode);

	//Call a data event that will be used to retrieve the data sent from the API in JSON format to the callback
	response.on("data", function(data){
		weatherData += data;
		if (response.statusCode === 200) {
			try{			
				weatherInfo = JSON.parse(weatherData);	
				console.log(weatherInfo.current.condition.text);
			}catch(e){
				console.log("We encountered error while processing your resquest");
			}
		}else {
			console.log("There was an error in your resquest! Try again later");
		}
	}).on("error", function(e){
		console.error("The API is unavailable");
	});	
});

request.end();

//check for weather current condition text
//weather locaation