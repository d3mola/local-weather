// use jquery
$(document).ready(function() {
	const endpoint = "https://fcc-weather-api.glitch.me/";
	let url = endpoint;
	let latitude = 40.7128, longitude = 74.0060;
	url += "api/current?lon=" + longitude + "&lat=" + latitude;
	$.getJSON(url, (data) => {
		let location = "<p>" + data.name + "</p>";
		let temperature = "<p>" + data.main.temp + "</p>";
		$(".location").html(location);
		$(".temperature").html(temperature);
	});
});