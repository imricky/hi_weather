#!/usr/bin/env node
console.log("-----------欢迎使用hi-weather-----------");
console.log("----------------------------------------");
var axios = require('axios');
var data = {}
if (process.argv[2]) {
	data.params = {
		city: process.argv[2]
	}
}
axios.get('http://api.jirengu.com/weather.php',data)
	.then(function(response){
		var weather = response.data.results[0].weather_data[0];

		console.log('您所在的城市是：'+ response.data.results[0].currentCity);
		console.log("----------------------------------------");
		console.log(response.data.results[0].weather_data[0].date);
		console.log('当前PM2.5为：' + response.data.results[0].pm25);


	})
	.catch(function(error){
		console.log(error)
	})
