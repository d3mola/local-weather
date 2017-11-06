// use jquery
$(document).ready(function() {
	// get geolocatipn data, then display
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) {
			let latitude = position.coords.latitude;
			let longitude = position.coords.longitude;

			// set the url
			const endpoint = "https://fcc-weather-api.glitch.me/";
			let url = endpoint;
			url += "api/current?lon=" + longitude + "&lat=" + latitude;

			let unit = " C";

			// get JSON data and display
			$.getJSON(url, (data) => {
				let location = "<p>" + data.name+ ", " + data.sys.country + "</p>";
				let temperature = "<p>" + data.main.temp + unit + "</p>";
				let weather = "<p>" + data.weather[0].description + "</p>";

				// manipulate DOM to display JSON data
				$(".location").html(location); // display location
				$("#temp").html(temperature); // display temperature and sky description
				$("#sky").html(weather);
				//$("#data").html(JSON.stringify(data)); // display full json data

				let clicked = true;
				// convert temp when button is clicked
				$("#button").on("click", () => {
					// once button is clicked, grab temperature and modify
					if (clicked) {
						$("body").css("background-color", "red");
						clicked = false;
					} else {
						$("body").css("background-color", "green");
						clicked = true;
					}

					//clicked = false;
					/*
					let farenheitTemp = tempConverter.toFarenheit(data.main.temp);
					farenheitTemp = "<p>" + farenheitTemp + " F" + "</p>";
					$("#temp").html(farenheitTemp);
					*/

					// far to cel
					// let celciusTemp = tempConverter.toCelcius(data.main.temp);
					// $(".temperature").html(JSON.stringify(celciusTemp) + " C");
				});// end of btn click
			});// end of getJSON from API


	  });// end of getCurrentPosition function
	}// end of if navigator

});// end of jquery

// celcius to farenheit converter
const tempConverter = {
	toCelcius: farenTemp => (farenTemp - 32) / 1.8,
	toFarenheit: celsTemp => (celsTemp * 1.8) + 32
}
// console.log(`celcius: ${tempConverter.toCelcius(26.63)}`);
// console.log(`farenheit: ${tempConverter.toFarenheit(26.63)}`)