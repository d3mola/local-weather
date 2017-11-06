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
				// let ele = data.main.temp;
				let temperature = "<p>" + data.main.temp + unit + "</p>";// data.main.temp changed to ele
				let weather = "<p>" + data.weather[0].description + "</p>";

				// manipulate DOM to display JSON data
				$(".location").html(location); // display location
				$("#temp").html(temperature); // display temperature and sky description
				$("#sky").html(weather);
				//$("#data").html(JSON.stringify(data)); // display full json data

				// click status of the button to help with toggle
				let clicked = true;

				// convert temp when button is clicked
				$("#button").on("click", () => {

					// toggle tmeperature
					if (clicked) {
						let farenheitTemp = tempConverter.toFarenheit(data.main.temp);
						farenheitTemp = "<p>" + farenheitTemp + " F" + "</p>";
						$("#temp").html(farenheitTemp);
						clicked = false;
					} else {
						$("#temp").html(temperature);
						clicked = true;
					}// end of toggle
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