const fetch = require('node-fetch');
const { response } = require('express');

exports.dateFact = function(date, date1) {
	return fetch("https://numbersapi.p.rapidapi.com/" + date + "/" + date1 + "/date?fragment=true&json=true", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "numbersapi.p.rapidapi.com",
			"x-rapidapi-key": "bba4d101b7msh118a45931a09c39p155c33jsna4a04106b21c"
		}
	})
	.then(resp => resp.json())
	.then(data => data);
}

exports.numberFact = function(num) {
	return fetch("https://numbersapi.p.rapidapi.com/" + num + "/math?fragment=true&json=true", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "numbersapi.p.rapidapi.com",
			"x-rapidapi-key": "bba4d101b7msh118a45931a09c39p155c33jsna4a04106b21c"
		}
	})
	.then(resp => resp.json())
	.then(data => data);
}

exports.randomFact = function(min, max) {
	return fetch("https://numbersapi.p.rapidapi.com/random/trivia?max=" + max + "&fragment=true&min=" + min + "&json=true", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "numbersapi.p.rapidapi.com",
			"x-rapidapi-key": "bba4d101b7msh118a45931a09c39p155c33jsna4a04106b21c"
		}
	})
	.then(resp => resp.json())
	.then(data => data);
}

exports.triviaFact = function(num) {
	return fetch("https://numbersapi.p.rapidapi.com/" + num + "/trivia?fragment=true&notfound=floor&json=true", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "numbersapi.p.rapidapi.com",
			"x-rapidapi-key": "bba4d101b7msh118a45931a09c39p155c33jsna4a04106b21c"
		}
	})
	.then(resp => resp.json())
	.then(data => data);
}

exports.yearFact = function(year) {
	return fetch("https://numbersapi.p.rapidapi.com/" + year + "/year?fragment=true&json=true", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "numbersapi.p.rapidapi.com",
			"x-rapidapi-key": "bba4d101b7msh118a45931a09c39p155c33jsna4a04106b21c"
		}
	})
	.then(resp => resp.json())
	.then(data => data);
}