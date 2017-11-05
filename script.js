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

			// get JSON data and display
			$.getJSON(url, (data) => {
				let location = "<p>" + data.name+ ", " + data.sys.country + "</p>";
				let temperature = "<p>" + data.main.temp + " F" + "</p>";
				temperature += "<br><p>" + data.weather[0].description + "</p>";

				// manipulate DOM to display JSON data
				$(".location").html(location);
				$(".temperature").html(temperature);
				$("#data").html(JSON.stringify(data));
			});
	  });
	}


});